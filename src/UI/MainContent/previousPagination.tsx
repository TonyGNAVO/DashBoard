export const getPreviousLast = (
    page: number,
    numberPerPage: number
): number => {
    return (page - 1) * numberPerPage;
};

export const getPreviousFirst = (page: number, numberPerPage: number) => {
    return numberPerPage * (page - 2) + 1;
};

export const getPreviousLeft = (page: number): boolean => {
    if (page - 1 === 1) return false;
    return true;
};
