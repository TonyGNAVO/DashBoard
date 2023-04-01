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

import {
    getPreviousLast,
    getPreviousFirst,
    getPreviousLeft,
} from "./previousPagination";

import { Ticket } from "../../Domain/Core/Entities/Ticket";
export class PaginationBuilder {
    private paginationSnapshot: Pagination<Ticket>;

    constructor(pagination: Pagination<Ticket>) {
        this.paginationSnapshot = pagination;
    }

    private selectItems(
        tickets: Ticket[],
        first: number,
        last: number
    ): Ticket[] {
        return tickets.slice(first - 1, last);
    }
    buildPreviousPagination = (): Pagination<Ticket> => {
        const page = this.paginationSnapshot.page - 1;
        const last = getPreviousLast(
            this.paginationSnapshot.page,
            this.paginationSnapshot.numberPerPage
        );
        const first = getPreviousFirst(
            this.paginationSnapshot.page,
            this.paginationSnapshot.numberPerPage
        );
        const left = getPreviousLeft(this.paginationSnapshot.page);
        const selectedItems = this.selectItems(
            this.paginationSnapshot.items,
            first,
            last
        );
        return {
            last,
            first,
            page,
            left,
            right: true,
            selectedItems,
            lastPage: this.paginationSnapshot.lastPage,
            number: this.paginationSnapshot.number,
            numberPerPage: this.paginationSnapshot.numberPerPage,
            items: this.paginationSnapshot.items,
        };
    };
    buildInitialPagination = (): Pagination<Ticket> => {
        const numberPerPage = 8;
        const page = 1;
        const number = this.paginationSnapshot.items.length;
        const last = getInitialLast(numberPerPage, number);
        const right = getInitialRight(numberPerPage, number);
        const lastPage = getInitialLastPage(numberPerPage, number);
        const left = false;
        const first = getInitialFirst(number);
        const selectedItems = this.selectItems(
            this.paginationSnapshot.items,
            first,
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

    buildNewPerPagePagination = (num: number): Pagination<Ticket> => {
        const numberPerPage = num;
        const page = 1;
        const number = this.paginationSnapshot.items.length;
        const last = getInitialLast(numberPerPage, number);
        const right = getInitialRight(numberPerPage, number);
        const lastPage = getInitialLastPage(numberPerPage, number);
        const left = false;
        const first = getInitialFirst(number);
        const selectedItems = this.selectItems(
            this.paginationSnapshot.items,
            first,
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
        const first = getNextFirst(
            this.paginationSnapshot.numberPerPage,
            this.paginationSnapshot.page
        );

        const right = getNextIsRightEnable(
            this.paginationSnapshot.page,
            this.paginationSnapshot.lastPage
        );

        const last = getNextLast(
            this.paginationSnapshot.numberPerPage,
            this.paginationSnapshot.page,
            this.paginationSnapshot.number
        );

        const page = getNextPage(this.paginationSnapshot.page);

        return {
            right,
            first,
            last,
            page,
            selectedItems: this.selectItems(
                this.paginationSnapshot.items,
                first,
                last
            ),
            left: true,
            number: this.paginationSnapshot.number,
            lastPage: this.paginationSnapshot.lastPage,
            items: this.paginationSnapshot.items,
            numberPerPage: this.paginationSnapshot.numberPerPage,
        };
    };
}
