import { TicketTable } from "../TicketTable/TicketTable";
import { TicketTableHeader } from "../TicketTableHeader/TicketTableHeader";
import { TicketTableContent } from "../TicketTableContent/TicketTableContent";
import { TicketTableFooter } from "../TicketTableFooter/TicketTableFooter";

export const TicketsContent = () => {
    return (
        <>
            <TicketTable>
                <TicketTableHeader />
                <TicketTableContent />
                <TicketTableFooter />
            </TicketTable>
        </>
    );
};
