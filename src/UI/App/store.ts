import { configureStore } from "@reduxjs/toolkit";
import PaginationReducer from "../../Domain/UseCases/UpdatingPagination";
import TicketsReducer from "../../Domain/UseCases/UpdateTickets";

export const store = configureStore({
    reducer: {
        tickets: TicketsReducer,
        pagination: PaginationReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
