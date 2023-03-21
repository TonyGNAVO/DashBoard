export type Pagination<ItemType> = {
    page: number;
    left: boolean;
    right: boolean;
    first: number;
    last: number;
    numberPerPage: number;
    number: number;
    lastPage: number;
    items: ItemType[];
    selectedItems: ItemType[];
};
