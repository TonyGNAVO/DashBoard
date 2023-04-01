import Css from "./style.module.scss";
import CSS from "csstype";
import { FC } from "react";
import { Ticket } from "../../Domain/Core/Entities/Ticket";
import { TicketItemsType } from "../../Presenters/TicketItemPaginationPresenter";
import p1 from "../../Images/p1.jpg"

type Props = {
    style: TicketItemsType
    ticket: Ticket;
};
export const TicketTableItem: FC<Props> = ({ style, ticket }) => {
    console.log(style)
    return (
        <tr className={Css.ticketTableItem} style={style.itemStyle}>
            <td className={Css.firstCol} >
                <div className={Css.ticketTableItemProfil}>
                    <img src={p1} alt="Profil" className={Css.ticketTableItemProfilImg} />
                </div>
                <div className={Css.ticketTableItemDetails}>
                    <p className={Css.ticketTableItemDetailsDescription}>Contact Email not Linked</p>
                    <p className={Css.ticketTableItemDetailsUpdate}>Updated 1 day ago</p>
                </div>
            </td>
            <td className={Css.secondCol}>
                <div className={Css.ticketTableItemName}>
                    <p className={Css.ticketTableItemNameValue}>Tom Cruise</p>
                    <p className={Css.ticketTableItemNameDate}>on 24.05.2019</p>
                </div>
            </td>
            <td className={Css.thirdCol}>

                <div className={Css.ticketTableItemDate}>
                    <p className={Css.ticketTableItemDateDay}>May 26, 2019</p>
                    <p className={Css.ticketTableItemDateHour}>6:30 PM</p>
                </div>
            </td>
            <td className={Css.fourthCol}>
                <div className={Css.ticketTableItemPriorityLabel}>HIGH</div>
            </td>
        </tr>
    );
};
