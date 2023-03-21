import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../App/store";
// import { nextPage } from "../../Domain/UseCases/UpdatingPagination";
import Css from "./style.module.scss";
import { Pagination } from "../MainContent/Pagination";
import { Ticket } from "../../Domain/Core/Entities/Ticket";

import paginationReducer, {
    nextPage,
} from "../../Domain/UseCases/UpdatingPagination";

export const TicketTableFooter = () => {
    const dispatch = useDispatch();

    const count: Pagination = useSelector(
        (state: RootState) => state.pagination.value
    );
    const tik: Ticket[] = useSelector(
        (state: RootState) => state.tickets.value
    );

    console.log(count);
    console.log(tik);

    return (
        <div className={Css.ticketTableFooter}>
            <button
                aria-label="Bonsoir"
                onClick={(e) => {
                    dispatch(nextPage());
                }}
            ></button>
        </div>
    );
};
