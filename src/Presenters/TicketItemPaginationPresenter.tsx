import { Ticket } from "../Domain/Core/Entities/Ticket";
import { Pagination } from "../Domain/Core/Entities/Pagination";
import { PaginationPresenter } from "./PaginationPresenter";
import CSS from "csstype";

export type TicketItemsType = {
    selectedItems: Ticket[];
    itemStyle: CSS.Properties;
};

export class TicketItemPaginationPresenter
    implements PaginationPresenter<TicketItemsType>
{
    private readonly BOX_ITEMS_HEIGHT = 73.6;

    present(pagination: Pagination<Ticket>): TicketItemsType {
        return {
            selectedItems: pagination.selectedItems,

            itemStyle: {
                height: pagination.numberPerPage > 8 ? '9.2rem' : `${this.BOX_ITEMS_HEIGHT / pagination.numberPerPage
                    }rem`
            }
        };
    }
}
