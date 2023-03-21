import { Pagination } from "./Pagination";
import { getNextIsRightEnable } from "./NextPaginationUtils";
import {
    getNextFirst,
    getInitialLast,
    getNextLast,
    getNextPage,
    getInitialRight,
    getInitialLastPage,
    getInitialFirst,
} from "./NextPaginationUtils";

import { Ticket } from "../../Domain/Core/Entities/Ticket";
export class PaginationBuilder {
    private paginationSnapshot: Pagination<Ticket>;

    constructor(pagination: Pagination<Ticket>) {
        this.paginationSnapshot = pagination;
    }

    buildInitialPagination = (): Pagination<Ticket> => {
        const numberPerPage = 8;
        const page = 1;
        const number = this.paginationSnapshot.items.length;
        const last = getInitialLast(numberPerPage, number);
        const right = getInitialRight(numberPerPage, number);
        const lastPage = getInitialLastPage(numberPerPage, number);
        const left = false;
        const first = getInitialFirst(number);
        const selectedItems = this.paginationSnapshot.items.slice(
            first - 1,
            last
        );
        const items = this.paginationSnapshot.items;

        return {
            numberPerPage,
            page,
            number,
            last,
            right,
            lastPage,
            left,
            first,
            items,
            selectedItems,
        };
    };

    buildNextPagination = (): Pagination<Ticket> => {
        const nextFirst = getNextFirst(
            this.paginationSnapshot.numberPerPage,
            this.paginationSnapshot.page
        );

        const newRight = getNextIsRightEnable(
            this.paginationSnapshot.page,
            this.paginationSnapshot.lastPage
        );

        const nextLast = getNextLast(
            this.paginationSnapshot.numberPerPage,
            this.paginationSnapshot.page,
            this.paginationSnapshot.number
        );

        const nextPage = getNextPage(this.paginationSnapshot.page);

        return {
            right: newRight,
            first: nextFirst,
            last: nextLast,
            page: nextPage,
            selectedItems: this.paginationSnapshot.items.slice(
                nextFirst - 1,
                nextLast
            ),
            left: true,
            number: this.paginationSnapshot.number,
            lastPage: this.paginationSnapshot.lastPage,
            items: this.paginationSnapshot.items,
            numberPerPage: this.paginationSnapshot.numberPerPage,
        };
    };
}
