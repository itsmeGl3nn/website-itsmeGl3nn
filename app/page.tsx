import GridLayout from '@/components/grid/layout';
import { gridItems, layouts } from '@/config/grid';
import { siteConfig, UNDER_CONSTRUCTION } from '@/config/site';
import GridItem from '@/components/grid/item';
import { UnderConstruction } from './under-construction';

export default function Home() {
    if (UNDER_CONSTRUCTION) {
        return <UnderConstruction />;
    }

    return (
        <>
            <header className='sr-only'>
                <h1>{siteConfig.title}</h1>
            </header>
            <main className='pt-24 pb-8'>
                <GridLayout layouts={layouts}>
                    {gridItems.map((item) => (
                        <GridItem key={item.i} id={item.i} component={item.component} />
                    ))}
                </GridLayout>
            </main>
        </>
    );
}
