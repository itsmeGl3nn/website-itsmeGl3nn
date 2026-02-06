'use client';

import { breakpoints, cols, rowHeights } from '@/utils/consts';
import { useBreakpoint, useMounted } from '@/utils/hooks';
import { cn } from '@/utils/lib';
import { useFilter } from '@/utils/filter-context';
import { itemCategories, type Category } from '@/config/categories';
import { Layout, Responsive, ResponsiveProps, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

// Simple top-down packing: place items sequentially into the grid
function packItems(items: Layout[], numCols: number): Layout[] {
    // Track the height of each column
    const colHeights = new Array(numCols).fill(0);
    const packed: Layout[] = [];

    for (const item of items) {
        const w = Math.min(item.w, numCols);

        // Find the best starting column where this item fits
        let bestCol = 0;
        let bestY = Infinity;

        for (let col = 0; col <= numCols - w; col++) {
            // The item spans from col to col+w-1
            // The Y position is the max height of the columns it would occupy
            const maxH = Math.max(...colHeights.slice(col, col + w));
            if (maxH < bestY) {
                bestY = maxH;
                bestCol = col;
            }
        }

        packed.push({ ...item, x: bestCol, y: bestY });

        // Update column heights
        for (let col = bestCol; col < bestCol + w; col++) {
            colHeights[col] = bestY + item.h;
        }
    }

    return packed;
}

export default function GridLayout({ layouts, className, children }: Readonly<ResponsiveProps>) {
    const { breakpoint, setBreakpoint } = useBreakpoint();
    const isMounted = useMounted();
    const { activeFilter } = useFilter();

    // Recompute layouts: active items packed to top, inactive items packed below
    const repackedLayouts = (() => {
        if (activeFilter === 'all') return layouts;

        const result: { [key: string]: Layout[] } = {};

        for (const [bp, items] of Object.entries(layouts ?? {})) {
            const layoutItems = items as Layout[];
            const numCols = cols[bp as keyof typeof cols] ?? 4;

            // Split into active and inactive, preserving original w/h
            const active = layoutItems.filter((item) => {
                const cats: Category[] = itemCategories[item.i] ?? [];
                return cats.includes(activeFilter as Category);
            });

            const inactive = layoutItems.filter((item) => {
                const cats: Category[] = itemCategories[item.i] ?? [];
                return !cats.includes(activeFilter as Category);
            });

            // Pack active items first, then inactive items below
            const packedActive = packItems(active, numCols);

            // Find the max Y after active items
            let maxActiveY = 0;
            for (const item of packedActive) {
                maxActiveY = Math.max(maxActiveY, item.y + item.h);
            }

            // Pack inactive items starting from below active items
            const packedInactive = packItems(inactive, numCols).map((item) => ({
                ...item,
                y: item.y + maxActiveY,
            }));

            result[bp] = [...packedActive, ...packedInactive];
        }

        return result;
    })();

    return (
        <section
            className={cn(
                'mx-auto max-w-[1200px] max-lg:max-w-[800px] max-md:max-w-[375px] max-sm:max-w-[320px]',
                isMounted ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0',
                'transition-[opacity,_transform] duration-700',
                className
            )}>
            <ResponsiveGridLayout
                layouts={repackedLayouts}
                breakpoints={breakpoints}
                cols={cols}
                isBounded
                isResizable={false}
                rowHeight={rowHeights[breakpoint]}
                useCSSTransforms={false}
                measureBeforeMount
                draggableCancel='.cancel-drag'
                onBreakpointChange={setBreakpoint}
                isDraggable={activeFilter === 'all' && ['lg', 'md'].includes(breakpoint)}
                margin={[16, 16]}>
                {children}
            </ResponsiveGridLayout>
        </section>
    );
}
