import { Description, Location, Project, Showcase, Showcaseone, Spotify, Article, Theme, LinkedIn, Contact } from '@/components/grid/widgets';
import { Layout } from 'react-grid-layout';
import type { Category } from '@/config/categories';

interface GridItem {
    i: string;
    component: React.ComponentType;
    categories: Category[];
}

export const gridItems: GridItem[] = [
    { i: 'description', component: Description, categories: ['about'] },
    { i: 'location', component: Location, categories: ['about'] },
    { i: 'project', component: Project, categories: ['projects'] },
    { i: 'spotify', component: Spotify, categories: ['media'] },
    { i: 'showcaseone', component: Showcaseone, categories: ['projects'] },
    { i: 'showcase', component: Showcase, categories: ['projects'] },
    { i: 'article', component: Article, categories: ['media'] },
    { i: 'theme', component: Theme, categories: [] },
    { i: 'linkedin', component: LinkedIn, categories: ['about'] },
    { i: 'contact', component: Contact, categories: ['media'] },
];

type Layouts = 'lg' | 'md' | 'sm';

export const layouts: { [key in Layouts]: Layout[] } = {
    lg: [
        { i: 'description', x: 0, y: 0, w: 2, h: 1 },
        { i: 'location', x: 2, y: 0, w: 1, h: 1 },
        { i: 'project', x: 3, y: 0, w: 1, h: 2 },
        { i: 'spotify', x: 0, y: 1, w: 1, h: 1 },
        { i: 'showcaseone', x: 1, y: 1, w: 1, h: 1 },
        { i: 'showcase', x: 2, y: 1, w: 1, h: 2 },
        { i: 'article', x: 0, y: 2, w: 2, h: 1 },
        { i: 'theme', x: 3, y: 2, w: 1, h: 1 },
        { i: 'linkedin', x: 0, y: 3, w: 2, h: 1 },
        { i: 'contact', x: 2, y: 3, w: 2, h: 1 },
    ],
    md: [
        { i: 'description', x: 0, y: 0, w: 2, h: 2 },
        { i: 'location', x: 2, y: 0, w: 2, h: 1 },
        { i: 'showcaseone', x: 2, y: 1, w: 1, h: 1 },
        { i: 'project', x: 3, y: 1, w: 1, h: 2 },
        { i: 'spotify', x: 0, y: 2, w: 1, h: 1 },
        { i: 'showcase', x: 1, y: 2, w: 1, h: 2 },
        { i: 'theme', x: 2, y: 2, w: 1, h: 1 },
        { i: 'article', x: 0, y: 3, w: 1, h: 1 },
        { i: 'linkedin', x: 2, y: 3, w: 1, h: 1 },
        { i: 'contact', x: 0, y: 4, w: 4, h: 2 },
    ],
    sm: [
        { i: 'description', x: 0, y: 0, w: 2, h: 2 },
        { i: 'location', x: 0, y: 2, w: 2, h: 1 },
        { i: 'project', x: 0, y: 3, w: 2, h: 2 },
        { i: 'spotify', x: 0, y: 5, w: 1, h: 1 },
        { i: 'showcaseone', x: 1, y: 5, w: 1, h: 1 },
        { i: 'showcase', x: 0, y: 6, w: 2, h: 2 },
        { i: 'article', x: 0, y: 8, w: 2, h: 2 },
        { i: 'theme', x: 0, y: 10, w: 1, h: 1 },
        { i: 'linkedin', x: 1, y: 10, w: 1, h: 1 },
        { i: 'contact', x: 0, y: 11, w: 2, h: 2 },
    ],
};

const projectLargeLayout: Layout[] = [
    { i: 'images-1', x: 0, y: 0, w: 2, h: 1 },
    { i: 'images-2', x: 2, y: 0, w: 1, h: 1 },
    { i: 'images-3', x: 3, y: 0, w: 1, h: 2 },
    { i: 'images-4', x: 0, y: 1, w: 1, h: 1 },
    { i: 'images-5', x: 1, y: 1, w: 2, h: 1 },
];

export const projectLayouts: { [key in Layouts]: Layout[] } = {
    lg: projectLargeLayout,
    md: projectLargeLayout,
    sm: [
        { i: 'images-1', x: 0, y: 0, w: 2, h: 1 },
        { i: 'images-2', x: 0, y: 1, w: 1, h: 1 },
        { i: 'images-3', x: 1, y: 1, w: 1, h: 2 },
        { i: 'images-4', x: 0, y: 2, w: 1, h: 1 },
        { i: 'images-5', x: 2, y: 3, w: 2, h: 1 },
    ],
};
