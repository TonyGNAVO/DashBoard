import { Ticket } from "../Domain/Core/Entities/Ticket";
import { Pagination } from "../UI/MainContent/Pagination";
import { PaginationPresenter } from "./PaginationPresenter";
import CSS from "csstype";

export type TicketItemsType = {
    selectedItems: Ticket[];
    itemStyle: CSS.Properties;
    profilStyle: CSS.Properties;
};

export class TicketItemPaginationPresenter
    implements PaginationPresenter<TicketItemsType>
{
    private readonly BOX_ITEMS_HEIGHT = 87;
    private readonly PROFIL_PHOTO_DEFAULT_DIMENSION = 4.4;
    private readonly NUMBER_PER_PAGE_DEFAULT = 8;

    present(pagination: Pagination<Ticket>): TicketItemsType {
        return {
            selectedItems: pagination.selectedItems,

            itemStyle: {
                height: `${this.BOX_ITEMS_HEIGHT / pagination.numberPerPage
                    }rem`
            },
            profilStyle: {
                height: `${this.PROFIL_PHOTO_DEFAULT_DIMENSION * (this.NUMBER_PER_PAGE_DEFAULT / pagination.numberPerPage)
                    }rem`,
                width: `${this.PROFIL_PHOTO_DEFAULT_DIMENSION * (this.NUMBER_PER_PAGE_DEFAULT / pagination.numberPerPage)
                    }rem`,

            }
        };
    }
}
