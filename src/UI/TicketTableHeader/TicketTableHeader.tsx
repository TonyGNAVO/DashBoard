import TicketTableHeaderCss from "./TicketTableHeader.module.scss";
export const TicketTableHeader = () => {
    return (
        <div className={TicketTableHeaderCss.ticketTableHeader}>
            <h2 className={TicketTableHeaderCss.ticketTableHeaderTitle}>
                All tickets
            </h2>
            <div
                className={TicketTableHeaderCss.ticketTableHeaderActions}
            ></div>
        </div>
    );
};
