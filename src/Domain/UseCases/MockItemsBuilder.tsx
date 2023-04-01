import { Ticket } from "../Core/Entities/Ticket";
import { TicketPriorityEnum } from "../Core/Entities/Ticket";

type ticketBuilderType = (numberTickets: number) => Ticket[];

export const createRandomTicketsBuilder = (): ticketBuilderType => {
    let id = 1;
    const tickets: Ticket[] = [];
    const createTickets = (numberTickets: number): Ticket[] => {
        for (let i = 0; i < numberTickets; i++) {
            const ticket: Ticket = {
                id,
                ticketDetails: "",
                customerName: "",
                date: "",
                priority: TicketPriorityEnum.LOW,
            };
            tickets.push(ticket);
            id++;
        }
        return tickets;
    };

    return createTickets;
};

export const builTicketsByIds = (tab: number[]): Ticket[] => {
    return tab.map((num) => {
        return {
            id: num,
            ticketDetails: "",
            customerName: "",
            date: "",
            priority: TicketPriorityEnum.LOW,
        };
    });
};
