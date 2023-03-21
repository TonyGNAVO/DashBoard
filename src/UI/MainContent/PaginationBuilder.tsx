import { Pagination } from "./Pagination";
import { getNextIsRightEnable } from "./NextPaginationUtils";
import { getNextFirst } from "./NextPaginationUtils";
import { getNextLast } from "./NextPaginationUtils";
import { getNextPage } from "./NextPaginationUtils";
import { Ticket } from "../../Domain/Core/Entities/Ticket";
export class PaginationBuilder {
    private paginationSnapshot: Pagination<Ticket>;

    constructor(pagination: Pagination<Ticket>) {
        this.paginationSnapshot = pagination;
    }

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
            left: this.paginationSnapshot.left,
            number: this.paginationSnapshot.number,
            lastPage: this.paginationSnapshot.lastPage,
            items: this.paginationSnapshot.items,
            numberPerPage: this.paginationSnapshot.numberPerPage,
        };
    };
}
