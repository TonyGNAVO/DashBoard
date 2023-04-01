import {
    getInitialLast,
    getInitialRight,
    getInitialLastPage,
    getInitialFirst,
} from "../Domain/UseCases/NextPaginationUtils";
import {
    createTicketsBuilder,
    builTicketsByIds,
} from "../Domain/UseCases/MockItemsBuilder";
import { PaginationBuilder } from "../Domain/UseCases/PaginationBuilder";
import { describe, it, expect } from "vitest";
describe("Get the inial last number of the list", () => {
    it(" 2 , 0 => 0 : number less or equal than number per page", () => {
        const numberPerPage = 2;
        const number = 0;

        const last = getInitialLast(numberPerPage, number);

        expect(last).toBe(0);
    });
    it(" 10 , 1 => 0 : number less or equal than number per page", () => {
        const numberPerPage = 10;
        const number = 1;

        const last = getInitialLast(numberPerPage, number);

        expect(last).toBe(1);
    });

    it(" 10 , 10 => 10 : number more than number per page", () => {
        const numberPerPage = 10;
        const number = 10;

        const last = getInitialLast(numberPerPage, number);

        expect(last).toBe(10);
    });

    it(" 10 , 11 => 10 : number more than number per page", () => {
        const numberPerPage = 10;
        const number = 11;

        const last = getInitialLast(numberPerPage, number);

        expect(last).toBe(10);
    });
});

describe("Get the inial last number of the list", () => {
    it(" 8 , 0 => 10 : number less or equal than number per page", () => {
        const numberPerPage = 8;
        const number = 0;

        const right = getInitialRight(numberPerPage, number);

        expect(right).toBe(false);
    });
    it(" 8 , 1 => 10 : number less or equal than number per page", () => {
        const numberPerPage = 8;
        const number = 1;

        const right = getInitialRight(numberPerPage, number);

        expect(right).toBe(false);
    });
    it(" 8 , 8 => 8 : number more than number per page", () => {
        const numberPerPage = 8;
        const number = 8;

        const right = getInitialRight(numberPerPage, number);

        expect(right).toBe(false);
    });
});

describe("Get the inial lastPage number", () => {
    it(" 8 , 0 => 10 : number less or equal than number per page", () => {
        const numberPerPage = 8;
        const number = 0;

        const lastPage = getInitialLastPage(numberPerPage, number);

        expect(lastPage).toBe(1);
    });
    it(" 8 , 1 => 10 : number less or equal than number per page", () => {
        const numberPerPage = 8;
        const number = 1;

        const lastPage = getInitialLastPage(numberPerPage, number);

        expect(lastPage).toBe(1);
    });

    it(" 8 , 8 => 10 : number less or equal than number per page", () => {
        const numberPerPage = 8;
        const number = 8;

        const lastPage = getInitialLastPage(numberPerPage, number);

        expect(lastPage).toBe(1);
    });

    it(" 8 , 9 => 10 : number less or equal than number per page", () => {
        const numberPerPage = 8;
        const number = 9;

        const lastPage = getInitialLastPage(numberPerPage, number);

        expect(lastPage).toBe(2);
    });

    it(" 8 , 17 => 10 : number less or equal than number per page", () => {
        const numberPerPage = 8;
        const number = 17;

        const lastPage = getInitialLastPage(numberPerPage, number);

        expect(lastPage).toBe(3);
    });
    it(" 8 , 25 => 10 : number less or equal than number per page", () => {
        const numberPerPage = 8;
        const number = 25;

        const lastPage = getInitialLastPage(numberPerPage, number);

        expect(lastPage).toBe(4);
    });
});

describe("get the first element of the page at the initialisation", () => {
    it("0 => 0", () => {
        const number = 0;

        const first = getInitialFirst(number);

        expect(first).toBe(0);
    });

    it(" 1 => 1", () => {
        const number = 1;

        const first = getInitialFirst(number);

        expect(first).toBe(1);
    });

    it(" 1 => 2", () => {
        const number = 2;

        const first = getInitialFirst(number);

        expect(first).toBe(1);
    });

    it(" 1 => 17", () => {
        const number = 17;

        const first = getInitialFirst(number);

        expect(first).toBe(1);
    });
});

describe("Get the right initial Pagination", () => {
    it(" 0 items", () => {
        const state = {
            value: {
                page: 0,
                left: false,
                right: false,
                first: 0,
                last: 0,
                number: 0,
                numberPerPage: 0,
                lastPage: 0,
                items: createTicketsBuilder()(0),
                selectedItems: [],
            },
        };

        const initialPagination = new PaginationBuilder(
            state.value
        ).buildInitialPagination();

        expect(initialPagination).toEqual({
            page: 1,
            left: false,
            right: false,
            first: 0,
            last: 0,
            number: 0,
            numberPerPage: 8,
            lastPage: 1,
            items: [],
            selectedItems: [],
        });
    });

    it(" 1 items", () => {
        const state = {
            value: {
                page: 0,
                left: false,
                right: false,
                first: 0,
                last: 0,
                number: 0,
                numberPerPage: 0,
                lastPage: 1,
                items: createTicketsBuilder()(1),
                selectedItems: [],
            },
        };

        const initialPagination = new PaginationBuilder(
            state.value
        ).buildInitialPagination();

        expect(initialPagination).toEqual({
            page: 1,
            left: false,
            right: false,
            first: 1,
            last: 1,
            number: 1,
            numberPerPage: 8,
            lastPage: 1,
            items: createTicketsBuilder()(1),
            selectedItems: builTicketsByIds([1]),
        });
    });

    it(" few items", () => {
        const state = {
            value: {
                page: 0,
                left: false,
                right: false,
                first: 0,
                last: 0,
                number: 0,
                numberPerPage: 0,
                lastPage: 0,
                items: createTicketsBuilder()(17),
                selectedItems: [],
            },
        };

        const initialPagination = new PaginationBuilder(
            state.value
        ).buildInitialPagination();

        expect(initialPagination).toEqual({
            page: 1,
            left: false,
            right: true,
            first: 1,
            last: 8,
            number: 17,
            numberPerPage: 8,
            lastPage: 3,
            items: createTicketsBuilder()(17),
            selectedItems: builTicketsByIds([1, 2, 3, 4, 5, 6, 7, 8]),
        });
    });
});
