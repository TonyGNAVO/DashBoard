export const isPageAdanceAbleToBeDisable = (currentPageNumber: number, lastPageNumber: number): boolean => {
    if (isAbleToBeValid(currentPageNumber, lastPageNumber)) {
        return false;
    }
    return true;
}

const isAbleToBeValid = (currentPageNumber: number, lastPageNumber: number) => {
    return (lastPageNumber - currentPageNumber === 1) || (currentPageNumber === 1 && lastPageNumber === 1);
}