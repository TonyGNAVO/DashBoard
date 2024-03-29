import Css from "./style.module.scss";

import { TicketTableItem } from "../TicketTableItem/TicketTableItem";
import { useSelector } from "react-redux";
import { RootState } from "../App/store";
import { TicketItemPaginationPresenter } from "../../Presenters/TicketItemPaginationPresenter";
import { Pagination } from "../../Domain/Core/Entities/Pagination";
import { Ticket } from "../../Domain/Core/Entities/Ticket";

export const TicketTableList = () => {
    const pagination: Pagination<Ticket> = useSelector(
        (state: RootState) => state.pagination.value
    );
    const ticketTable = new TicketItemPaginationPresenter().present(pagination);
    console.log(ticketTable.selectedItems)
    return (
        <>
            {ticketTable.selectedItems.map((ticket) => (
                <TicketTableItem
                    ticket={ticket}
                    key={ticket.id}
                    style={ticketTable}
                />
            ))}
        </>
    );
};
