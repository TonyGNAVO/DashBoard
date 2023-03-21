export type Pagination<ItemType> = {
    last: number;
    right: boolean;
    lastPage: number;
    number: number;
    numberPerPage: number;
    page: number;
    left: boolean;

    first: number;

    //facile a calculé

    selectedItems: ItemType[];
    items: ItemType[];
};
