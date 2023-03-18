import { Pagination } from "./Pagination";
import { PaginationBuilder } from "./PaginationBuilder";
export class NextPaginationBuilder implements PaginationBuilder {

    private paginationSnapshot: Pagination;
    private rightValue = false;
    private firstValue = 0;
    private lastValue = 0;
    private currentPageNumberValue = 0;

    constructor(pagination: Pagination) {
        this.paginationSnapshot = structuredClone(pagination);

    }

    right(value: boolean): NextPaginationBuilder {
        this.rightValue = value;
        return this;
    }
    first(value: number): NextPaginationBuilder {
        this.firstValue = value;
        return this;
    }
    last(value: number): NextPaginationBuilder {
        this.lastValue = value;
        return this;
    }
    currentPageNumber(value: number): NextPaginationBuilder {
        this.currentPageNumberValue = value;
        return this;
    }
    build(): Pagination {
        return this.buildNextPagination();
    }

    private buildNextPagination = (): Pagination => {
        return {
            left: this.paginationSnapshot.left,
            numberOfElement: this.paginationSnapshot.numberOfElement,
            finalPageNumber: this.paginationSnapshot.finalPageNumber,
            numberOfElementPerPage: this.paginationSnapshot.numberOfElementPerPage,
            right: this.rightValue,
            first: this.firstValue,
            last: this.lastValue,
            currentPageNumber: this.currentPageNumberValue
        };

    }

}

