export type Ticket = {
    id: number;
    ticketDetails: string;
    customerName: string;
    date: string;
    priority: TicketPriorityEnum;
};

export class TicketPriorityEnum {
    static readonly LOW = new TicketPriorityEnum("#FEC400", "Low");
    static readonly NORMAL = new TicketPriorityEnum("#29CC97", "Normal");
    static readonly HIGH = new TicketPriorityEnum("#F0F1F7", "High");

    private constructor(
        readonly backgroundColor: string,
        readonly name: string
    ) {}
}
