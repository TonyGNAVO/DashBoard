import { Ticket } from "../Domain/Core/Entities/Ticket";
import { Pagination } from "../UI/MainContent/Pagination";
import { PaginationPresenter } from "./PaginationPresenter";
import CSS from "csstype";

type TicketItemsType = {
    // nombre d'élément par page
    selectedItems: Ticket[];
    itemStyle: CSS.Properties;
};

export class TicketItemPaginationPresenter
    implements PaginationPresenter<TicketItemsType>
{
    private readonly BOX_ITEMS_HEIGHT = 87;

    present(pagination: Pagination<Ticket>): TicketItemsType {
        return {
            selectedItems: pagination.selectedItems,
            itemStyle: {
                height: `${
                    this.BOX_ITEMS_HEIGHT / pagination.numberPerPage
                }rem`,
            },
        };
    }
}
