import { createSlice } from "@reduxjs/toolkit";
import { Ticket } from "../Core/Entities/Ticket";

interface TicketsState {
    value: Ticket[];
}

const initialState: TicketsState = {
    value: [],
};

export const TicketSlice = createSlice({
    // Todo
    name: "Tickets",
    initialState,
    reducers: {},
});

export default TicketSlice.reducer;
