import { Pagination } from "./Pagination";
import { NextPaginationBuilder } from "./NextPaginationBuilder";

import {
    getNumberFinaElementOfTheNewpage,
    getNumberOfFirstElementOfTheNewpage,
    isPageAdanceAbleToBeDisable,
    getNewPageNumber,
} from "./NextPaginationUtils";

export const getTheNextPagination = (pagination: Pagination): Pagination => {
    const currentPageNumber = getNewPageNumber(pagination.currentPageNumber);
    const first = getNumberOfFirstElementOfTheNewpage(
        pagination.numberOfElementPerPage,
        pagination.currentPageNumber
    );
    const last = getNumberFinaElementOfTheNewpage(
        pagination.numberOfElementPerPage,
        pagination.currentPageNumber,
        pagination.numberOfElement
    );
    const right = isPageAdanceAbleToBeDisable(
        pagination.currentPageNumber,
        pagination.finalPageNumber
    );

    return new NextPaginationBuilder(pagination)
        .currentPageNumber(currentPageNumber)
        .first(first)
        .last(last)
        .right(right)
        .build();
};
