'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useFilter } from '@/utils/filter-context';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);
    const pathname = usePathname();
    const { activeFilter, setActiveFilter } = useFilter();

    // Hide navbar on content pages (projects, posts)
    const isContentPage = pathname.startsWith('/projects') || pathname.startsWith('/posts');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                const currentScrollY = window.scrollY;

                if (currentScrollY < 10) {
                    setIsVisible(true);
                } else if (currentScrollY < lastScrollY.current) {
                    setIsVisible(true);
                } else if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
                    setIsVisible(false);
                    setIsOpen(false);
                }

                lastScrollY.current = currentScrollY;
            };

            window.addEventListener('scroll', handleScroll, { passive: true });
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    const handleTabClick = (tab: string) => {
        setIsOpen(false);
        setActiveFilter(tab as any);
        // Scroll to top when switching tabs
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (isContentPage) return null;

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 bg-gray-100/80 dark:bg-dark-950/80 backdrop-blur-md transition-transform duration-300 ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}>
            <div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    {/* Logo */}
                    <button
                        onClick={() => handleTabClick('all')}
                        className='flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity'>
                        <span className='text-xl font-bold font-montserrat bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent'>
                            Glenn
                        </span>
                    </button>

                    {/* Desktop Navigation - Centered Pill Container */}
                    <div className='hidden md:flex items-center absolute left-1/2 -translate-x-1/2'>
                        <div className='bg-gray-200/60 dark:bg-dark-800/60 rounded-full p-1 flex items-center gap-0.5'>
                            {['All', 'About', 'Projects', 'Media'].map((tab) => {
                                const id = tab.toLowerCase();
                                return (
                                    <button
                                        key={id}
                                        onClick={() => handleTabClick(id)}
                                        className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                                            activeFilter === id
                                                ? 'bg-white dark:bg-dark-700 text-gray-900 dark:text-white shadow-sm ring-1 ring-gray-200 dark:ring-dark-600'
                                                : 'text-gray-500 dark:text-dark-400 hover:text-gray-900 dark:hover:text-white'
                                        }`}>
                                        {tab}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Contact Button - Right */}
                    <a
                        href='mailto:tolentinog945@gmail.com'
                        className='hidden md:inline-block text-gray-900 dark:text-dark-50 hover:text-gray-600 dark:hover:text-dark-200 font-medium text-sm transition-colors'>
                        Contact
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className='md:hidden p-2 rounded-lg text-gray-900 dark:text-dark-50 hover:bg-gray-200 dark:hover:bg-dark-800 transition-colors'
                        aria-label='Toggle menu'>
                        {isOpen ? (
                            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        ) : (
                            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className='md:hidden py-4 border-t border-gray-200 dark:border-dark-800'>
                        <div className='flex flex-col gap-1'>
                            {['All', 'About', 'Projects', 'Media'].map((tab) => {
                                const id = tab.toLowerCase();
                                return (
                                    <button
                                        key={id}
                                        onClick={() => handleTabClick(id)}
                                        className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 text-left ${
                                            activeFilter === id
                                                ? 'bg-white dark:bg-dark-800 text-gray-900 dark:text-white shadow-sm'
                                                : 'text-gray-500 dark:text-dark-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-dark-800'
                                        }`}>
                                        {tab}
                                    </button>
                                );
                            })}
                            <a
                                href='mailto:tolentinog945@gmail.com'
                                className='px-4 py-2.5 text-gray-900 dark:text-dark-50 font-medium text-sm transition-colors rounded-lg hover:bg-gray-50 dark:hover:bg-dark-800'>
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
