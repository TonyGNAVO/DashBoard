import { Pagination } from "./Pagination";
import { PaginationBuilder } from "./PaginationBuilder";

export const getTheNextPagination = (pagination: Pagination): Pagination => {
    return new PaginationBuilder(pagination).buildNextPagination();
};
