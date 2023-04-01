import Css from "./style.module.scss";

import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../App/store";
import { FooterPaginationPresenter } from "../../Presenters/FooterPaginationPresenter";
import { Pagination } from "../../Domain/Core/Entities/Pagination";
import { Ticket } from "../../Domain/Core/Entities/Ticket";
import {
    nextPage,
    previousPage,
    newNumberPerPage
} from "../../Domain/UseCases/UpdatingPagination";
import numPage from "../../Images/numPage.svg";
import left from "../../Images/left.svg";
import right from "../../Images/right.svg";

export const TicketTableFooter = () => {
    const dispatch = useDispatch();
    const pagination: Pagination<Ticket> = useSelector(
        (state: RootState) => state.pagination.value
    );
    const footer = new FooterPaginationPresenter().present(pagination);

    type perPage = {
        id: number,
        value: number
    }

    const numberPerPage: perPage[] = [{ id: 1, value: 4 }, { id: 2, value: 8 }, { id: 3, value: 12 }, { id: 4, value: 20 }, { id: 5, value: 50 }]
    return (
        <div className={Css.ticketTableFooter}>
            <div className={Css.ticketTableFooterWrapper}>
                <p className={Css.ticketTableFooterRowPerPage}>Rows per page</p>
                {/* <p className={Css.ticketTableFooterRowPerPageValue}>
                    {footer.numberPerPage}
                </p>
                <figure className={Css.ticketTableFooterRowPerPageMedia}>
                    <img
                        className={Css.ticketTableFooterRowPerPageMediaImg}
                        src={numPage}
                        alt="Icon to choose the number of item per page"
                    />
                   
                </figure> */}
                <select name="" id="" onChange={e => dispatch(newNumberPerPage(e.target.value))}>
                    <option value={footer.numberPerPage}>{footer.numberPerPage}</option>
                    {
                        numberPerPage.filter(num => num.value != footer.numberPerPage).map(num => <option key={num.id} value={num.value}>{num.value}</option>)
                    }
                </select>
                <div className={Css.ticketTableFooterElement}>
                    <p
                        className={Css.ticketTableFooterElementValue}
                    >{`${footer.first}-${footer.last} of ${footer.number}`}</p>
                    <figure
                        style={{ display: footer.left ? "flex" : "none" }}
                        className={`${Css.ticketTableFooterElementMedia} ${Css.ticketTableFooterElementLeftMedia}`}
                        onClick={(e) => dispatch(previousPage())}
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
