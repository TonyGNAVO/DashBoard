import { createSlice } from "@reduxjs/toolkit";
import { Pagination } from "../../UI/MainContent/Pagination";
import { PaginationBuilder } from "../../UI/MainContent/PaginationBuilder";
import { Ticket } from "../Core/Entities/Ticket";
import { createRandomTicketsBuilder } from "../../UI/MainContent/MockItemsBuilder";

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
    items: createRandomTicketsBuilder()(47),
    selectedItems: [],
};

const initialState: PaginationState = {
    value: new PaginationBuilder(pagination).buildInitialPagination(),
};

export const PaginationSlice = createSlice({
    // Todo
    name: "pagination",
    initialState,

    // To do
    reducers: {
        nextPage: (paginationState: PaginationState) => {
            paginationState.value = new PaginationBuilder(
                paginationState.value
            ).buildNextPagination();
        },
    },
});

//To do
export const { nextPage } = PaginationSlice.actions;

export default PaginationSlice.reducer;
