import TicketTableHeaderCss from "./style.module.scss";
export const TicketTableHeader = () => {
    return (
        <div className={TicketTableHeaderCss.ticketTableHeader}>
            <h2 className={TicketTableHeaderCss.ticketTableHeaderTitle}>
                All tickets
            </h2>
            {/* <div
                className={TicketTableHeaderCss.ticketTableHeaderActions}
            ></div> */}
        </div>
    );
};
