
import { Ticket } from "../Domain/Core/Entities/Ticket";
import { Pagination } from "../UI/MainContent/Pagination";

export interface PaginationPresenter<PresentedType> {

    present(pagination: Pagination<Ticket>): PresentedType;
}