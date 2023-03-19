import Css from "./TicketTableItem.module.scss";

export const TicketTableItem = () => {
    return (
        <tr className={Css.ticketTableItem}>
            <td colSpan={4}></td>
        </tr>
    );
};
