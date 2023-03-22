import Css from "./style.module.scss";

import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../App/store";
import { FooterPaginationPresenter } from "../../Presenters/FooterPaginationPresenter";
import { Pagination } from "../MainContent/Pagination";
import { Ticket } from "../../Domain/Core/Entities/Ticket";
import { nextPage } from "../../Domain/UseCases/UpdatingPagination";
import numPage from "../../Images/numPage.svg";
import left from "../../Images/left.svg";
import right from "../../Images/right.svg";

export const TicketTableFooter = () => {
    const dispatch = useDispatch();

    const pagination: Pagination<Ticket> = useSelector(
        (state: RootState) => state.pagination.value
    );
    const footer = new FooterPaginationPresenter().present(pagination);
    return (
        <div className={Css.ticketTableFooter}>
            <div className={Css.ticketTableFooterWrapper}>
                <p className={Css.ticketTableFooterRowPerPage}>Rows per page</p>
                <p className={Css.ticketTableFooterRowPerPageValue}>
                    {footer.numberPerPage}
                </p>
                <figure className={Css.ticketTableFooterRowPerPageMedia}>
                    <img
                        className={Css.ticketTableFooterRowPerPageMediaImg}
                        src={numPage}
                        alt="Icon to choose the number of item per page"
                    />
                </figure>
                <div className={Css.ticketTableFooterElement}>
                    <p
                        className={Css.ticketTableFooterElementValue}
                    >{`${footer.first}-${footer.last} of ${footer.number}`}</p>
                    <figure
                        className={`${Css.ticketTableFooterElementMedia} ${Css.ticketTableFooterElementLeftMedia}`}
                    >
                        <img
                            className={Css.ticketTableFooterElementMediaImg}
                            src={left}
                            alt="go to the previous page"
                        />
                    </figure>
                    <figure
                        style={{ display: footer.right ? "flex" : "none" }}
                        className={Css.ticketTableFooterElementMedia}
                        onClick={(e) => dispatch(nextPage())}
                    >
                        <img
                            className={Css.ticketTableFooterElementMediaImg}
                            src={right}
                            alt="go to the next page"
                        />
                    </figure>
                </div>
            </div>
        </div>
    );
};
