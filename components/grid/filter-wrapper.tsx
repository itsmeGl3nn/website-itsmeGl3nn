'use client';

import { useFilter } from '@/utils/filter-context';
import { itemCategories, type Category } from '@/config/categories';

export default function FilterWrapper({
    itemId,
    children,
}: {
    itemId: string;
    children: React.ReactNode;
}) {
    const { activeFilter } = useFilter();

    const categories: Category[] = itemCategories[itemId] ?? [];
    const isActive = activeFilter === 'all' || categories.includes(activeFilter as Category);

    return (
        <div className={`size-full transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-20 pointer-events-none'}`}>
            {children}
        </div>
    );
}
