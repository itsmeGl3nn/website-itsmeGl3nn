'use client';

import { cn } from '@/utils/lib';
import { useEffect, useRef, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import Card from '../../ui/card';

const MANILA = { lat: 14.5995, lng: 120.9842 };
const MAX_ZOOM = 14;
const MIN_ZOOM = 3;
const INITIAL_ZOOM = 12;

export default function Location() {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<any>(null);
    const [currentZoom, setCurrentZoom] = useState(INITIAL_ZOOM);
    const [isMapLoaded, setIsMapLoaded] = useState(false);

    useEffect(() => {
        const initMap = async () => {
            const L = (await import('leaflet')).default;
            
            // Load Leaflet CSS dynamically via link tag
            if (!document.getElementById('leaflet-css')) {
                const link = document.createElement('link');
                link.id = 'leaflet-css';
                link.rel = 'stylesheet';
                link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
                document.head.appendChild(link);
            }

            if (!mapContainerRef.current || mapRef.current) return;

            const map = L.map(mapContainerRef.current, {
                center: [MANILA.lat, MANILA.lng],
                zoom: INITIAL_ZOOM,
                zoomControl: false,
                scrollWheelZoom: false,
                dragging: false,
                doubleClickZoom: false,
                touchZoom: false,
                boxZoom: false,
                keyboard: false,
                attributionControl: false,
            });

            L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
                maxZoom: MAX_ZOOM,
                minZoom: MIN_ZOOM,
            }).addTo(map);

            // Custom avatar marker with pulse
            const avatarIcon = L.divIcon({
                className: 'avatar-marker',
                html: `
                    <div style="position: relative; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px;">
                        <div style="position: absolute; width: 56px; height: 56px; border-radius: 50%; background: rgba(56, 189, 248, 0.3); animation: marker-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
                        <div style="position: absolute; width: 48px; height: 48px; border-radius: 50%; background: rgba(56, 189, 248, 0.35);"></div>
                        <div style="position: relative; width: 36px; height: 36px; border-radius: 50%; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.15); border: 2px solid white;">
                            <img src="/images/profile.jpg" alt="My location" style="width: 100%; height: 100%; object-fit: cover;" />
                        </div>
                    </div>
                `,
                iconSize: [64, 64],
                iconAnchor: [32, 32],
            });

            L.marker([MANILA.lat, MANILA.lng], { icon: avatarIcon }).addTo(map);

            mapRef.current = map;
            setIsMapLoaded(true);
            setTimeout(() => map.invalidateSize(), 100);
        };

        initMap();

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);

    const handleZoom = (zoomIn: boolean) => {
        if (!mapRef.current) return;
        const map = mapRef.current;
        const newZoom = map.getZoom() + (zoomIn ? 1 : -1);
        if (newZoom >= MIN_ZOOM && newZoom <= MAX_ZOOM) {
            map.setZoom(newZoom);
            setCurrentZoom(newZoom);
        }
    };

    return (
        <Card className='relative size-full'>
            <style jsx global>{`
                @keyframes marker-ping {
                    75%, 100% {
                        transform: scale(1.6);
                        opacity: 0;
                    }
                }
                .avatar-marker {
                    background: transparent !important;
                    border: none !important;
                }
            `}</style>
            <div ref={mapContainerRef} className='size-full' />
            {isMapLoaded && (
                <div className='absolute inset-x-3 bottom-3 z-[1000] flex items-center justify-between'>
                    <ZoomButton
                        isVisible={currentZoom > MIN_ZOOM}
                        onClick={() => handleZoom(false)}
                        aria-label='Zoom Out'>
                        <FaMinus />
                    </ZoomButton>
                    <ZoomButton
                        isVisible={currentZoom < MAX_ZOOM}
                        onClick={() => handleZoom(true)}
                        aria-label='Zoom In'>
                        <FaPlus />
                    </ZoomButton>
                </div>
            )}
            {!isMapLoaded && (
                <div className='bg-dark-300 dark:bg-dark-700 absolute inset-0 size-full animate-pulse' />
            )}
        </Card>
    );
}

interface ZoomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isVisible: boolean;
}

function ZoomButton({ isVisible, ...props }: Readonly<ZoomButtonProps>) {
    return (
        <button
            className={cn(
                'group inline-flex cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-full bg-white p-3 whitespace-nowrap transition-all duration-300',
                'ring-2 ring-gray-200/45 outline-hidden focus-within:ring-4 focus-within:outline-hidden hover:ring-4 dark:text-black dark:ring-gray-200/30',
                isVisible ? 'cancel-drag' : 'invisible'
            )}
            type='button'
            {...props}
        />
    );
}
