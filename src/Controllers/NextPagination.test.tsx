import { describe, it, expect } from "vitest";
import { createRandomTicketsBuilder } from "../Domain/UseCases/MockItemsBuilder";
import { builTicketsByIds } from "../Domain/UseCases/MockItemsBuilder";
import paginationReducer, {
    nextPage,
} from "../Domain/UseCases/UpdatingPagination";
import {
    getNextLast,
    getNextFirst,
    getNextIsRightEnable,
    getNextPage,
} from "../Domain/UseCases/NextPaginationUtils";

describe("Get the new page number after ask the next page", () => {
    it("should return when the current page Number is 1", () => {
        const currentPageNumber = 0;
        const newPage = getNextPage(currentPageNumber);
        expect(newPage).toBe(1);
    });
    it("should return when the current page number is 2", () => {
        const currentPageNumber = 1;
        const newPage = getNextPage(currentPageNumber);
        expect(newPage).toBe(2);
    });
});

describe("Know if the we should be able to ask the next page the next time", () => {
    it("(currentPageNumber = 1 , lastPageNumber = 1)  => false", () => {
        const currentPageNumber = 1;
        const lastPageNumber = 1;
        const isRightButtonDisable = getNextIsRightEnable(
            currentPageNumber,
            lastPageNumber
        );
        expect(isRightButtonDisable).toBe(false);
    });

    it("(currentPageNumber = 1 , lastPageNumber = 2)  => false", () => {
        const currentPageNumber = 1;
        const lastPageNumber = 2;
        const isRightButtonDisable = getNextIsRightEnable(
            currentPageNumber,
            lastPageNumber
        );
        expect(isRightButtonDisable).toBe(false);
    });

    it("(currentPageNumber = 2 , lastPageNumber = 3)  => false", () => {
        const currentPageNumber = 2;
        const lastPageNumber = 3;
        const isRightButtonDisable = getNextIsRightEnable(
            currentPageNumber,
            lastPageNumber
        );
        expect(isRightButtonDisable).toBe(false);
    });
    it("(currentPageNumber = 3 , lastPageNumber = 4)  => false", () => {
        const currentPageNumber = 3;
        const lastPageNumber = 4;
        const isRightButtonDisable = getNextIsRightEnable(
            currentPageNumber,
            lastPageNumber
        );
        expect(isRightButtonDisable).toBe(false);
    });
    it("(currentPageNumber = 1 , lastPageNumber = 3)  => true", () => {
        const currentPageNumber = 1;
        const lastPageNumber = 3;
        const isRightButtonDisable = getNextIsRightEnable(
            currentPageNumber,
            lastPageNumber
        );
        expect(isRightButtonDisable).toBe(true);
    });
    it("(currentPageNumber = 2 , lastPageNumber = 4)  => true", () => {
        const currentPageNumber = 2;
        const lastPageNumber = 4;
        const isRightButtonDisable = getNextIsRightEnable(
            currentPageNumber,
            lastPageNumber
        );
        expect(isRightButtonDisable).toBe(true);
    });

    it("(currentPageNumber = 1005 , lastPageNumber = 100000)  => true", () => {
        const currentPageNumber = 1005;
        const lastPageNumber = 100000;
        const isRightButtonDisable = getNextIsRightEnable(
            currentPageNumber,
            lastPageNumber
        );
        expect(isRightButtonDisable).toBe(true);
    });
});

describe("Get the first element of the page", () => {
    it("3 et 1 ", () => {
        const numberOfItemPerPage = 3;
        const currentPageNumber = 1;
        const numberOfFirstElementOfTheNewpage = getNextFirst(
            numberOfItemPerPage,
            currentPageNumber
        );
        expect(numberOfFirstElementOfTheNewpage).toBe(4);
    });

    it("4 et 1 ", () => {
        const numberOfItemPerPage = 4;
        const currentPageNumber = 1;
        const numberOfFirstElementOfTheNewpage = getNextFirst(
            numberOfItemPerPage,
            currentPageNumber
        );
        expect(numberOfFirstElementOfTheNewpage).toBe(5);
    });

    it("5 et 1 ", () => {
        const numberOfItemPerPage = 5;
        const currentPageNumber = 1;
        const numberOfFirstElementOfTheNewpage = getNextFirst(
            numberOfItemPerPage,
            currentPageNumber
        );
        expect(numberOfFirstElementOfTheNewpage).toBe(6);
    });

    it("5 et 2 ", () => {
        const numberOfItemPerPage = 5;
        const currentPageNumber = 2;
        const numberOfFirstElementOfTheNewpage = getNextFirst(
            numberOfItemPerPage,
            currentPageNumber
        );
        expect(numberOfFirstElementOfTheNewpage).toBe(11);
    });

    it("5 et 3 ", () => {
        const numberOfItemPerPage = 5;
        const currentPageNumber = 3;
        const numberOfFirstElementOfTheNewpage = getNextFirst(
            numberOfItemPerPage,
            currentPageNumber
        );
        expect(numberOfFirstElementOfTheNewpage).toBe(16);
    });

    //move ther both at the same time
    it("7 et 4 ", () => {
        const numberOfItemPerPage = 7;
        const currentPageNumber = 4;
        const numberOfFirstElementOfTheNewpage = getNextFirst(
            numberOfItemPerPage,
            currentPageNumber
        );
        expect(numberOfFirstElementOfTheNewpage).toBe(29);
    });
});
describe("Get the last Element of the page", () => {
    it("(numberOfItemPerPage = 2 , currentPageNumber = 1 , itemTotal=5, )  => 4", () => {
        const numberOfItemPerPage = 2;
        const currentPageNumber = 1;
        const itemTotal = 5;

        const numberOfFinalElementOfTheNewpage = getNextLast(
            numberOfItemPerPage,
            currentPageNumber,
            itemTotal
        );

        expect(numberOfFinalElementOfTheNewpage).toBe(4);
    });

    it("(numberOfItemPerPage = 2 , currentPageNumber = 1 , itemTotal=6 )  => 4", () => {
        const numberOfItemPerPage = 2;
        const currentPageNumber = 1;
        const itemTotal = 6;

        const numberOfFinalElementOfTheNewpage = getNextLast(
            numberOfItemPerPage,
            currentPageNumber,
            itemTotal
        );

        expect(numberOfFinalElementOfTheNewpage).toBe(4);
    });

    it("(numberOfItemPerPage = 3 , currentPageNumber = 1 , itemTotal=7 )  => 4", () => {
        const numberOfItemPerPage = 3;
        const currentPageNumber = 1;
        const itemTotal = 7;

        const numberOfFinalElementOfTheNewpage = getNextLast(
            numberOfItemPerPage,
            currentPageNumber,
            itemTotal
        );

        expect(numberOfFinalElementOfTheNewpage).toBe(6);
    });

    it("(numberOfItemPerPage = 2 , currentPageNumber = 2 , itemTotal=7 )  => 4", () => {
        const numberOfItemPerPage = 2;
        const currentPageNumber = 2;
        const itemTotal = 7;

        const numberOfFinalElementOfTheNewpage = getNextLast(
            numberOfItemPerPage,
            currentPageNumber,
            itemTotal
        );

        expect(numberOfFinalElementOfTheNewpage).toBe(6);
    });

    it("(numberOfItemPerPage = 2 , currentPageNumber = 3 , itemTotal=9 )  => 4", () => {
        const numberOfItemPerPage = 2;
        const currentPageNumber = 3;
        const itemTotal = 9;

        const numberOfFinalElementOfTheNewpage = getNextLast(
            numberOfItemPerPage,
            currentPageNumber,
            itemTotal
        );

        expect(numberOfFinalElementOfTheNewpage).toBe(8);
    });

    it("(numberOfItemPerPage = 2 , currentPageNumber = 1 , itemTotal=3 )  => 4", () => {
        const numberOfItemPerPage = 2;
        const currentPageNumber = 1;
        const itemTotal = 3;

        const numberOfFinalElementOfTheNewpage = getNextLast(
            numberOfItemPerPage,
            currentPageNumber,
            itemTotal
        );

        expect(numberOfFinalElementOfTheNewpage).toBe(3);
    });

    it("(numberOfItemPerPage = 2 , currentPageNumber = 3 , itemTotal=11 )  => 4", () => {
        const numberOfItemPerPage = 2;
        const currentPageNumber = 5;
        const itemTotal = 11;

        const numberOfFinalElementOfTheNewpage = getNextLast(
            numberOfItemPerPage,
            currentPageNumber,
            itemTotal
        );

        expect(numberOfFinalElementOfTheNewpage).toBe(11);
    });

    it("(numberOfItemPerPage = 2 , currentPageNumber = 3 , itemTotal=13 )  => 4", () => {
        const numberOfItemPerPage = 3;
        const currentPageNumber = 4;
        const itemTotal = 13;

        const numberOfFinalElementOfTheNewpage = getNextLast(
            numberOfItemPerPage,
            currentPageNumber,
            itemTotal
        );

        expect(numberOfFinalElementOfTheNewpage).toBe(13);
    });
});

describe("Get the new Pagination from current pagination", () => {
    it("next", () => {
        const state = {
            value: {
                page: 1,
                left: false,
                right: false,
                first: 0,
                last: 0,
                number: 5,
                numberPerPage: 2,
                lastPage: 3,
                items: createRandomTicketsBuilder()(5),
                selectedItems: [],
            },
        };

        const nextPagination = paginationReducer(state, nextPage);

        expect(nextPagination).toEqual({
            value: {
                page: 2,
                left: true,
                right: true,
                first: 3,
                last: 4,
                number: 5,
                numberPerPage: 2,
                lastPage: 3,
                items: createRandomTicketsBuilder()(5),
                selectedItems: builTicketsByIds([3, 4]),
            },
        });
    });

    it("next 2", () => {
        const state = {
            value: {
                page: 2,
                left: false,
                right: false,
                first: 0,
                last: 0,
                number: 7,
                numberPerPage: 2,
                lastPage: 4,
                items: createRandomTicketsBuilder()(7),
                selectedItems: [],
            },
        };

        const nextPagination = paginationReducer(state, nextPage);

        expect(nextPagination).toEqual({
            value: {
                page: 3,
                left: true,
                right: true,
                first: 5,
                last: 6,
                number: 7,
                numberPerPage: 2,
                lastPage: 4,
                items: createRandomTicketsBuilder()(7),
                selectedItems: builTicketsByIds([5, 6]),
            },
        });
    });

    it("next 3", () => {
        const state = {
            value: {
                page: 3,
                left: false,
                right: false,
                first: 0,
                last: 0,
                number: 11,
                numberPerPage: 3,
                lastPage: 4,
                items: createRandomTicketsBuilder()(11),
                selectedItems: [],
            },
        };

        const nextPagination = paginationReducer(state, nextPage);

        expect(nextPagination).toEqual({
            value: {
                page: 4,
                left: true,
                right: false,
                first: 10,
                last: 11,
                number: 11,
                numberPerPage: 3,
                lastPage: 4,
                items: createRandomTicketsBuilder()(11),
                selectedItems: builTicketsByIds([10, 11]),
            },
        });
    });
});
