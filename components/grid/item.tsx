import FilterWrapper from './filter-wrapper';

export default function GridItem({
    component: Component,
    ...props
}: Readonly<{ component: React.ComponentType<any> } & React.HTMLAttributes<HTMLDivElement>>) {
    return (
        <div {...props}>
            <FilterWrapper itemId={props.id as string}>
                <Component />
            </FilterWrapper>
        </div>
    );
}
