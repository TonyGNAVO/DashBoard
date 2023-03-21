export const getNextPage = (currentPageNumber: number): number => {
    return currentPageNumber + 1;
};

export const getNextLast = (
    numberOfItemPerPage: number,
    currentPageNumber: number,
    numberOfElement: number
): number => {
    const numberOfPenultimatePage = ~~(numberOfElement / numberOfItemPerPage);
    if (numberOfPenultimatePage === currentPageNumber) {
        return numberOfElement;
    }
    const nextPageNumber = currentPageNumber + 1;
    return nextPageNumber * numberOfItemPerPage;
};

export const getNextIsRightEnable = (
    currentPageNumber: number,
    lastPageNumber: number
): boolean => {
    if (isAbleToBeValid(currentPageNumber, lastPageNumber)) {
        return false;
    }
    return true;
};
export const getNextFirst = (
    numberOfItemPerPage: number,
    currentPageNumber: number
): number => {
    return 1 + currentPageNumber * numberOfItemPerPage;
};
const isAbleToBeValid = (currentPageNumber: number, lastPageNumber: number) => {
    return (
        lastPageNumber - currentPageNumber === 1 ||
        (currentPageNumber === 1 && lastPageNumber === 1)
    );
};
