import TicketTableContentCss from "./TicketTableContent.module.scss"
export const TicketTableContent = () => {

    return (
        <table className={TicketTableContentCss.ticketTableContent} >
            <thead >
                <tr className={TicketTableContentCss.ticketTableContentFields} >
                    <th className={`${TicketTableContentCss.ticketTableContentField} ${TicketTableContentCss.firstCol}`} >Ticket details</th>
                    <th className={`${TicketTableContentCss.ticketTableContentField} ${TicketTableContentCss.secondCol}`}  >Customer name</th>
                    <th className={`${TicketTableContentCss.ticketTableContentField} ${TicketTableContentCss.thirdCol}`} >Date</th>
                    <th className={`${TicketTableContentCss.ticketTableContentField} ${TicketTableContentCss.fourthCol}`}>Priority</th>
                </tr>
            </thead>
            <tbody>
                <tr className={TicketTableContentCss.ticketTableContentValue}>
                    <td>The table body</td>
                </tr>
            </tbody>
        </table>

    )
}