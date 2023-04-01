export type Pagination<ItemType> = {
    last: number;
    first: number;
    page: number;
    left: boolean;
    right: boolean;
    selectedItems: ItemType[];
    lastPage: number;
    number: number;
    numberPerPage: number;
};
