export type Category = 'about' | 'projects' | 'media';

// Standalone category map — no component imports, safe for client components
export const itemCategories: Record<string, Category[]> = {
    description: ['about'],
    location: ['about'],
    project: ['projects'],
    spotify: ['media'],
    showcaseone: ['projects'],
    showcase: ['projects'],
    article: ['media'],
    theme: [],
    linkedin: ['about'],
    contact: ['media'],
};
