import { Pagination } from "./Pagination"
import { getNewPageNumber } from "./computeIncrement"
import { isPageAdanceAbleToBeDisable } from "./right"
import { getNumberOfFirstElementOfTheNewpage } from "./first"
import { getNumberFinaElementOfTheNewpage } from "./final"

export const getTheNextPagination = (pagination: Pagination): Pagination => {

    const paginationSnapshot: Pagination = structuredClone(pagination)
    const { left, numberOfElement, numberOfElementPerPage, finalPageNumber } = paginationSnapshot

    return {
        currentPageNumber: getNewPageNumber(pagination.currentPageNumber),
        right: isPageAdanceAbleToBeDisable(pagination.currentPageNumber, pagination.finalPageNumber),
        first: getNumberOfFirstElementOfTheNewpage(pagination.numberOfElementPerPage, pagination.currentPageNumber),
        last: getNumberFinaElementOfTheNewpage(pagination.numberOfElementPerPage, pagination.currentPageNumber, pagination.numberOfElement),
        left,
        numberOfElement,
        numberOfElementPerPage,
        finalPageNumber
    }
}  