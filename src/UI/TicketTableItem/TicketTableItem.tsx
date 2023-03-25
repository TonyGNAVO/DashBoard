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
    return (
        <tr className={Css.ticketTableItem} style={style.itemStyle}>
            <td className={Css.firstCol} >
                <div className={Css.ticketTableItemProfil} style={style.profilStyle}>
                    <img src={p1} alt="Profil" className={Css.ticketTableItemProfilImg} />
                </div>
            </td>
            <td className={Css.secondCol}></td>
            <td className={Css.thirdCol}></td>
            <td className={Css.fourthCol}></td>
        </tr>
    );
};
