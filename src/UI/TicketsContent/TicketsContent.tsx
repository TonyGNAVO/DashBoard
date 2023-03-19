import { TicketTable } from "../TicketTable/TicketTable";
import { TicketTableHeader } from "../TicketTableHeader/TicketTableHeader";
import { TicketTableContent } from "../TicketTableContent/TicketTableContent";

export const TicketsContent = () => {
    return (
        <>
            <TicketTable>
                <TicketTableHeader />
                <TicketTableContent />
            </TicketTable>
        </>
    );
};
