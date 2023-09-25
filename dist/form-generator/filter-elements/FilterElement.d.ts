interface FilterElementInterface {
    accessor: string;
    nestedForm?: (index: number) => JSX.Element;
}
export default function FilterElement({ accessor, nestedForm }: FilterElementInterface): JSX.Element;
export {};
