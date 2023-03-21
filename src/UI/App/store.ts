import { configureStore } from "@reduxjs/toolkit";
import PaginationReducer from "../../Domain/UseCases/UpdatingPagination";

export const store = configureStore({
    reducer: {
        pagination: PaginationReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
