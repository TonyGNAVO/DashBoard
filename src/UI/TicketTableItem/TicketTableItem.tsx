import Css from "./style.module.scss";
import CSS from "csstype";
import { FC } from "react";

type Props = {
    style: CSS.Properties;
};
export const TicketTableItem: FC<Props> = ({ style }) => {
    return (
        <tr className={Css.ticketTableItem} style={style}>
            <td colSpan={4}></td>
        </tr>
    );
};
