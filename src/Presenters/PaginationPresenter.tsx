import { Ticket } from "../Domain/Core/Entities/Ticket";
import { Pagination } from "../Domain/Core/Entities/Pagination";

export interface PaginationPresenter<PresentedType> {
    present(pagination: Pagination<Ticket>): PresentedType;
}
