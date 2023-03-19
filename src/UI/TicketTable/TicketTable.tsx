import TicketTableCss from "./style.module.scss";
import { FC } from "react";

type Props = { children: JSX.Element[] };
export const TicketTable: FC<Props> = ({ children }) => {
    return <div className={TicketTableCss.ticketTable}>{children}</div>;
};
