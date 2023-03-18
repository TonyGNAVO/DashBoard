export const getNumberFinaElementOfTheNewpage = (numberOfItemPerPage: number, currentPageNumber: number, numberOfElement: number): number => {
    const numberOfPenultimatePage = ~~(numberOfElement / numberOfItemPerPage);
    if (numberOfPenultimatePage === currentPageNumber) {
        return numberOfElement;
    }
    const nextPageNumber = currentPageNumber + 1
    return nextPageNumber * numberOfItemPerPage;
}