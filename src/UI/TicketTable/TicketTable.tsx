import TicketTableCss from "./TicketTable.module.scss";
import { TicketTableHeader } from "../TicketTableHeader/TicketTableHeader";
import { TicketTableContent } from "../TicketTableContent/TicketTableContent";
export const TicketTable = () => {
    return (
        <div className={TicketTableCss.ticketTable}>
            <TicketTableHeader />
            <TicketTableContent />
        </div>
    );
};
