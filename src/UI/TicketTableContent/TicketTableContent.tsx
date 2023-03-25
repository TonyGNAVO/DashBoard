import TicketTableContentCss from "./style.module.scss";
import { TicketTableList } from "../TicketTableList/TicketTableList";
export const TicketTableContent = () => {
    return (
        <table className={TicketTableContentCss.ticketTableContent}>
            <thead className={TicketTableContentCss.ticketTableContentFields}>
                <tr
                    className={
                        TicketTableContentCss.ticketTableContentFieldsWrapper
                    }
                >
                    <th id="th1"
                        className={`${TicketTableContentCss.ticketTableContentField} ${TicketTableContentCss.firstCol}`}
                    >
                        Ticket details
                    </th>
                    <th id="th2"
                        className={`${TicketTableContentCss.ticketTableContentField} ${TicketTableContentCss.secondCol}`}
                    >
                        Customer name
                    </th>
                    <th id="th3"
                        className={`${TicketTableContentCss.ticketTableContentField} ${TicketTableContentCss.thirdCol}`}
                    >
                        Date
                    </th>
                    <th id="th4"
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
