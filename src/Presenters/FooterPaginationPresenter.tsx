import { PaginationPresenter } from "./PaginationPresenter";
import { Pagination } from "../UI/MainContent/Pagination";
import { Ticket } from "../Domain/Core/Entities/Ticket";

export type FooterType = {
    right: boolean;
    left: boolean;
    number: number;
    first: number;
    last: number;
    numberPerPage: number;
};

export class FooterPaginationPresenter
    implements PaginationPresenter<FooterType>
{
    present(pagination: Pagination<Ticket>): FooterType {
        return {
            right: pagination.right,
            left: pagination.left,
            number: pagination.number,
            first: pagination.first,
            last: pagination.last,
            numberPerPage: pagination.numberPerPage,
        };
    }
}
