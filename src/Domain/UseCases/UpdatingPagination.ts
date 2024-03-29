import { PayloadAction , createSlice } from "@reduxjs/toolkit";
import { Pagination } from "../Core/Entities/Pagination";
import { PaginationBuilder } from "./PaginationBuilder";
import { Ticket } from "../Core/Entities/Ticket";
import { createTicketsBuilder,createRandomTicketsBuilder } from "./MockItemsBuilder";

interface PaginationState {
    value: Pagination<Ticket>;
}

const pagination: Pagination<Ticket> = {
    page: 0,
    left: false,
    right: false,
    first: 0,
    last: 0,
    number: 0,
    numberPerPage: 0,
    lastPage: 0,
    items: createRandomTicketsBuilder(97),
    selectedItems: [],
};

const initialState: PaginationState = {
    value: new PaginationBuilder(pagination).buildInitialPagination(),
};

export const PaginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        nextPage: (paginationState: PaginationState) => {
            paginationState.value = new PaginationBuilder(
                paginationState.value
            ).buildNextPagination();
        },
        previousPage: (paginationState: PaginationState) => {
            paginationState.value = new PaginationBuilder(
                paginationState.value
            ).buildPreviousPagination();
        },
        newNumberPerPage: (paginationState: PaginationState,action:PayloadAction<number>) => {
            console.log(action.payload)
            paginationState.value = new PaginationBuilder(pagination).buildNewPerPagePagination(action.payload)
        },
    },
});

//To do
export const { nextPage, previousPage,newNumberPerPage } = PaginationSlice.actions;

export default PaginationSlice.reducer;
