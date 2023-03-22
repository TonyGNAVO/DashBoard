import TicketTableContentCss from "./style.module.scss";
import { TicketTableList } from "../TicketTableList/TicketTableList";

import { TicketTableItem } from "../TicketTableItem/TicketTableItem";
export const TicketTableContent = () => {
    return (
        <table className={TicketTableContentCss.ticketTableContent}>
            <thead className={TicketTableContentCss.ticketTableContentFields}>
                <tr
                    className={
                        TicketTableContentCss.ticketTableContentFieldsWrapper
                    }
                >
                    <th
                        className={`${TicketTableContentCss.ticketTableContentField} ${TicketTableContentCss.firstCol}`}
                    >
                        Ticket details
                    </th>
                    <th
                        className={`${TicketTableContentCss.ticketTableContentField} ${TicketTableContentCss.secondCol}`}
                    >
                        Customer name
                    </th>
                    <th
                        className={`${TicketTableContentCss.ticketTableContentField} ${TicketTableContentCss.thirdCol}`}
                    >
                        Date
                    </th>
                    <th
                        className={`${TicketTableContentCss.ticketTableContentField} ${TicketTableContentCss.fourthCol}`}
                    >
                        Priority
                    </th>
                </tr>
            </thead>
            <tbody>
                <TicketTableList />
            </tbody>
        </table>
    );
};
