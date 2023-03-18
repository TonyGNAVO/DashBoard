export const getNumberOfFirstElementOfTheNewpage = (numberOfItemPerPage: number, currentPageNumber: number): number => {
    return 1 + (currentPageNumber) * numberOfItemPerPage
}