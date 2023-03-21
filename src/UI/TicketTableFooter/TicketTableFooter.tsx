import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../App/store";
import { FooterPaginationPresenter } from "../../Presenters/FooterPaginationPresenter";

import Css from "./style.module.scss";
import { footerType } from "../../Presenters/FooterPaginationPresenter";

import { Pagination } from "../MainContent/Pagination";
import { Ticket } from "../../Domain/Core/Entities/Ticket";
import { nextPage } from "../../Domain/UseCases/UpdatingPagination";

export const TicketTableFooter = () => {
    const dispatch = useDispatch();

    const pagination: Pagination<Ticket> = useSelector(
        (state: RootState) => state.pagination.value
    )
    const footer = new FooterPaginationPresenter().present(pagination);
    console.log(footer)
    return (
        <div className={Css.ticketTableFooter}>
            <button
                aria-label="Bonsoir"
                onClick={(e) => {
                    dispatch(nextPage());
                }}
            > Bonsoir</button>
        </div>
    );
};
