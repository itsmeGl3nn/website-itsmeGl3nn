'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

type FilterTab = 'all' | 'about' | 'projects' | 'media';

interface FilterContextType {
    activeFilter: FilterTab;
    setActiveFilter: (filter: FilterTab) => void;
}

const FilterContext = createContext<FilterContextType>({
    activeFilter: 'all',
    setActiveFilter: () => {},
});

export function FilterProvider({ children }: { children: ReactNode }) {
    const [activeFilter, setActiveFilter] = useState<FilterTab>('all');
    return (
        <FilterContext.Provider value={{ activeFilter, setActiveFilter }}>
            {children}
        </FilterContext.Provider>
    );
}

export function useFilter() {
    return useContext(FilterContext);
}
