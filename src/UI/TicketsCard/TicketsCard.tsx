import TicketsCardCss from "./TicketsCard.module.scss";
import { TicketStatsItem } from "../TicketStatsItem/TicketStatsItem";

type TicketStatsItemType = {
    id: number;
    description: string;
    statValue: number;
};
const TicketStatsItems: TicketStatsItemType[] = [
    {
        id: 1,
        description: "Waiting on Feature Request",
        statValue: 4238,
    },
    {
        id: 2,
        description: "Awaiting Customer Response",
        statValue: 1005,
    },
    {
        id: 3,
        description: "Awaiting Developer Fix",
        statValue: 914,
    },
    {
        id: 4,
        description: "Pending",
        statValue: 281,
    },
];

export const TicketsCard = () => {
    return (
        <>
            <h2 className={TicketsCardCss.ticketsCardTitle}>
                Unresolved tickets
            </h2>
            <p className={TicketsCardCss.ticketsCardDetails}>View details</p>
            <p className={TicketsCardCss.ticketsCardGroup}>
                <span className={TicketsCardCss.ticketsCardGroupName}>
                    Group:
                </span>
                <span className={TicketsCardCss.ticketsCardGroupValue}>
                    {" "}
                    Support
                </span>
            </p>
            {TicketStatsItems.map((ticket) => (
                <TicketStatsItem
                    key={ticket.id}
                    description={ticket.description}
                    statValue={ticket.statValue}
                />
            ))}
        </>
    );
};
