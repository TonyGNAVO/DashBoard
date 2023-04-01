import { Ticket } from "../Core/Entities/Ticket";
import { TicketPriorityEnum } from "../Core/Entities/Ticket";

type ticketBuilderType = (numberTickets: number) => Ticket[];

const ticketDetails = [
    "Contact Email not Linked",
    "Adding Images to Featured Posts",
    "When will I be charged this month?",
    "Payment not going through",
    "Unable to add replies",
    "Downtime since last week",
    "Referral Bonus",
    "How do I change my password?"
]

const ticketDetailsUpdates = [1, 2, 3, 4, 5, 6, 7, 8];

const customerNames = [
    "Tom Cruise",
    "Matt Damon",
    "Robert Downey",
    "Christian Bale",
    "Henry Cavil",
    "Chris Evans",
    "Sam Smith",
    "Steve Rogers"
]

const priorities = [
    TicketPriorityEnum.LOW,
    TicketPriorityEnum.NORMAL,
    TicketPriorityEnum.HIGH,
]


export const createRandomTicketsBuilder = (numberTickets: number): Ticket[] => {
    let id = 1;
    const tickets: Ticket[] = [];
    for (let i = 0; i < numberTickets; i++) {
        const ticket: Ticket = {
            id,
            ticketDetails: ticketDetails[Math.floor((Math.random() * ticketDetails.length))],
            ticketDetailsUpdate: ticketDetailsUpdates[Math.floor((Math.random() * ticketDetailsUpdates.length))],
            customerName: customerNames[Math.floor((Math.random() * customerNames.length))],
            customerNameCate: "",
            date: "",
            priority: priorities[Math.floor((Math.random() * priorities.length))],
        };
        tickets.push(ticket);
        id++;
    }


    return tickets.sort((a, b) => a.ticketDetailsUpdate - b.ticketDetailsUpdate);
};

export const createTicketsBuilder = (): ticketBuilderType => {
    let id = 1;
    const tickets: Ticket[] = [];
    const createTickets = (numberTickets: number): Ticket[] => {
        for (let i = 0; i < numberTickets; i++) {
            const ticket: Ticket = {
                id,
                ticketDetails: "",
                ticketDetailsUpdate: 0,
                customerName: "",
                customerNameCate: "",
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
            ticketDetailsUpdate: 1,
            customerName: "",
            date: "",
            priority: TicketPriorityEnum.LOW,
        };
    });
};
