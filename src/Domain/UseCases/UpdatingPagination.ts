import { createSlice } from "@reduxjs/toolkit";
import { Pagination } from "../../UI/MainContent/Pagination";
import { PaginationBuilder } from "../../UI/MainContent/PaginationBuilder";
import { Ticket } from "../Core/Entities/Ticket";

interface PaginationState {
    value: Pagination<Ticket>;
}

const initialState: PaginationState = {
    value: {
        page: 1,
        left: false,
        right: false,
        first: 1,
        last: 8,
        numberPerPage: 8,
        number: 17,
        lastPage: 3,
        items: [],
        selectedItems: [],
    },
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
