import ticketStatItemCss from "./TicketStatsItem.module.scss";
import { FC } from "react";
type props = { description: string; statValue: number };
export const TicketStatsItem: FC<props> = ({ description, statValue }) => {
    return (
        <div className={ticketStatItemCss.ticketStatsItem}>
            <p className={ticketStatItemCss.ticketStatsItemDescription}>
                {description}
            </p>
            <p className={ticketStatItemCss.ticketStatsItemValue}>
                {statValue}
            </p>
        </div>
    );
};
