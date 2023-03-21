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

//  Initial
export const getInitialLast = (
    numberPerPage: number,
    number: number
): number => {
    if (number > numberPerPage) {
        return numberPerPage;
    }
    return number;
};

export const getInitialRight = (
    numberPerPage: number,
    number: number
): boolean => {
    if (number > numberPerPage) {
        return true;
    }
    return false;
};

export const getInitialLastPage = (
    numberPerPage: number,
    number: number
): number => {
    if (number > numberPerPage) {
        return Math.floor(number / numberPerPage) + 1;
    }
    return 1;
};

export const getInitialFirst = (number: number): number => {
    if (number >= 1) {
        return 1;
    }
    return 0;
};
