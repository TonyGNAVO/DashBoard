import { describe, it, expect } from 'vitest';
import { getNewPageNumber } from './computeIncrement';
import { isPageAdanceAbleToBeDisable } from './right';
import { getNumberOfFirstElementOfTheNewpage } from "./first"


describe('Get the new page number after ask the new page', () => {
    it('should return when the current page Number is 1', () => {
        const currentPageNumber = 0;
        const newPage = getNewPageNumber(currentPageNumber)
        expect(newPage).toBe(1);
    });
    it('should return when the current page number is 2', () => {
        const currentPageNumber = 1;
        const newPage = getNewPageNumber(currentPageNumber)
        expect(newPage).toBe(2);
    });
});

describe('right', () => {
    it('(currentPageNumber = 1 , lastPageNumber = 1)  => false', () => {
        const currentPageNumber = 1;
        const lastPageNumber = 1;
        const isRightButtonDisable = isPageAdanceAbleToBeDisable(currentPageNumber, lastPageNumber)
        expect(isRightButtonDisable).toBe(false);
    });

    it('(currentPageNumber = 1 , lastPageNumber = 2)  => false', () => {
        const currentPageNumber = 1;
        const lastPageNumber = 2;
        const isRightButtonDisable = isPageAdanceAbleToBeDisable(currentPageNumber, lastPageNumber)
        expect(isRightButtonDisable).toBe(false);
    });

    it('(currentPageNumber = 2 , lastPageNumber = 3)  => false', () => {
        const currentPageNumber = 2;
        const lastPageNumber = 3;
        const isRightButtonDisable = isPageAdanceAbleToBeDisable(currentPageNumber, lastPageNumber)
        expect(isRightButtonDisable).toBe(false);
    });
    it('(currentPageNumber = 3 , lastPageNumber = 4)  => false', () => {
        const currentPageNumber = 3;
        const lastPageNumber = 4;
        const isRightButtonDisable = isPageAdanceAbleToBeDisable(currentPageNumber, lastPageNumber)
        expect(isRightButtonDisable).toBe(false);
    });
    it('(currentPageNumber = 1 , lastPageNumber = 3)  => true', () => {
        const currentPageNumber = 1;
        const lastPageNumber = 3;
        const isRightButtonDisable = isPageAdanceAbleToBeDisable(currentPageNumber, lastPageNumber)
        expect(isRightButtonDisable).toBe(true);
    });
    it('(currentPageNumber = 2 , lastPageNumber = 4)  => true', () => {
        const currentPageNumber = 2;
        const lastPageNumber = 4;
        const isRightButtonDisable = isPageAdanceAbleToBeDisable(currentPageNumber, lastPageNumber)
        expect(isRightButtonDisable).toBe(true);
    });

    it('(currentPageNumber = 1005 , lastPageNumber = 100000)  => true', () => {
        const currentPageNumber = 1005;
        const lastPageNumber = 100000;
        const isRightButtonDisable = isPageAdanceAbleToBeDisable(currentPageNumber, lastPageNumber)
        expect(isRightButtonDisable).toBe(true);
    });
});

describe('first', () => {
    it('3 et 2 ', () => {
        const numberOfItemPerPage = 3;
        const currentPageNumber = 2;
        const numberOfFirstElementOfTheNewpage = getNumberOfFirstElementOfTheNewpage(numberOfItemPerPage, currentPageNumber);
        expect(numberOfFirstElementOfTheNewpage).toBe(4);
    });

    it('4 et 2 ', () => {
        const numberOfItemPerPage = 4;
        const currentPageNumber = 2;
        const numberOfFirstElementOfTheNewpage = getNumberOfFirstElementOfTheNewpage(numberOfItemPerPage, currentPageNumber);
        expect(numberOfFirstElementOfTheNewpage).toBe(5);
    });

    it('5 et 2 ', () => {
        const numberOfItemPerPage = 5;
        const currentPageNumber = 2;
        const numberOfFirstElementOfTheNewpage = getNumberOfFirstElementOfTheNewpage(numberOfItemPerPage, currentPageNumber);
        expect(numberOfFirstElementOfTheNewpage).toBe(6);
    });


    it('5 et 3 ', () => {
        const numberOfItemPerPage = 5;
        const currentPageNumber = 3;
        const numberOfFirstElementOfTheNewpage = getNumberOfFirstElementOfTheNewpage(numberOfItemPerPage, currentPageNumber);
        expect(numberOfFirstElementOfTheNewpage).toBe(11);
    });

    it('5 et 4 ', () => {
        const numberOfItemPerPage = 5;
        const currentPageNumber = 4;
        const numberOfFirstElementOfTheNewpage = getNumberOfFirstElementOfTheNewpage(numberOfItemPerPage, currentPageNumber);
        expect(numberOfFirstElementOfTheNewpage).toBe(16);
    });

    //move ther both at the same time
    it('6 et 3 ', () => {
        const numberOfItemPerPage = 7;
        const currentPageNumber = 5;
        const numberOfFirstElementOfTheNewpage = getNumberOfFirstElementOfTheNewpage(numberOfItemPerPage, currentPageNumber);
        expect(numberOfFirstElementOfTheNewpage).toBe(29);
    });

});


