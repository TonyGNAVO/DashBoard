import {
    getPreviousLast,
    getPreviousFirst,
    getPreviousLeft,
} from "../Domain/UseCases/previousPaginationUtils";
import paginationReducer, {
    previousPage,
} from "../Domain/UseCases/UpdatingPagination";
import { describe, it, expect } from "vitest";
import {
    createTicketsBuilder,
    builTicketsByIds,
} from "../Domain/UseCases/MockItemsBuilder";

describe("Get the new last number of the page after ask the previous Page", () => {
    it("x ", () => {
        const page = 2;
        const numberPerPage = 8;

        const last = getPreviousLast(page, numberPerPage);

        expect(last).toBe(8);
    });

    it("y", () => {
        const page = 3;
        const numberPerPage = 8;

        const last = getPreviousLast(page, numberPerPage);

        expect(last).toBe(16);
    });
    it("y", () => {
        const page = 4;
        const numberPerPage = 8;

        const last = getPreviousLast(page, numberPerPage);

        expect(last).toBe(24);
    });

    it("change number per page", () => {
        const page = 4;
        const numberPerPage = 7;

        const last = getPreviousLast(page, numberPerPage);

        expect(last).toBe(21);
    });
});

describe("get first", () => {
    it(" 2, 8 => 1 ", () => {
        const page = 2;
        const numberPerPage = 8;

        const first = getPreviousFirst(page, numberPerPage);

        expect(first).toBe(1);
    });

    it(" 3, 8 => 9 ", () => {
        const page = 3;
        const numberPerPage = 8;

        const first = getPreviousFirst(page, numberPerPage);

        expect(first).toBe(9);
    });

    it(" 4, 8 => 17 ", () => {
        const page = 4;
        const numberPerPage = 8;

        const first = getPreviousFirst(page, numberPerPage);

        expect(first).toBe(17);
    });
    it(" 4, 7 => 1 ", () => {
        const page = 4;
        const numberPerPage = 7;

        const first = getPreviousFirst(page, numberPerPage);

        expect(first).toBe(15);
    });
});

describe("get Previous left", () => {
    it("not the first page 1 : 77 => return true", () => {
        const page = 77;

        const left = getPreviousLeft(page);

        expect(left).toBe(true);
    });
    it("not the first page 1 : 77 => return true", () => {
        const page = 109;

        const left = getPreviousLeft(page);

        expect(left).toBe(true);
    });
    it("not the first page 2 : 1 => return true", () => {
        const page = 2;

        const left = getPreviousLeft(page);

        expect(left).toBe(false);
    });
});

describe("", () => {
    it("", () => {
        const state = {
            value: {
                page: 2,
                left: false,
                right: false,
                first: 9,
                last: 11,
                number: 11,
                numberPerPage: 8,
                lastPage: 2,
                items: createTicketsBuilder()(11),
                selectedItems: [],
            },
        };

        const previousPagination = paginationReducer(state, previousPage);

        expect(previousPagination).toEqual({
            value: {
                page: 1,
                left: false,
                right: true,
                first: 1,
                last: 8,
                number: 11,
                numberPerPage: 8,
                lastPage: 2,
                items: createTicketsBuilder()(11),
                selectedItems: builTicketsByIds([1, 2, 3, 4, 5, 6, 7, 8]),
            },
        });
    });

    it("", () => {
        const state = {
            value: {
                page: 3,
                left: false,
                right: false,
                first: 17,
                last: 24,
                number: 19,
                numberPerPage: 8,
                lastPage: 3,
                items: createTicketsBuilder()(19),
                selectedItems: [],
            },
        };

        const previousPagination = paginationReducer(state, previousPage);

        expect(previousPagination).toEqual({
            value: {
                page: 2,
                left: true,
                right: true,
                first: 9,
                last: 16,
                number: 19,
                numberPerPage: 8,
                lastPage: 3,
                items: createTicketsBuilder()(19),
                selectedItems: builTicketsByIds([
                    9, 10, 11, 12, 13, 14, 15, 16,
                ]),
            },
        });
    });
});
