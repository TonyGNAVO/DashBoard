import { PaginationPresenter } from "./PaginationPresenter";
import { Pagination } from "../UI/MainContent/Pagination";
import CSS from 'csstype';
import { Ticket } from "../Domain/Core/Entities/Ticket";

export type footerType = {
    right: boolean,
    left: boolean,
    number: number,
    first: number,
    last: number,
    numberPerPage: number
}

export class FooterPaginationPresenter implements PaginationPresenter<footerType> {

    present(pagination: Pagination<Ticket>): footerType {

        return {
            right: pagination.right,
            left: pagination.left,
            number: pagination.number,
            first: pagination.first,
            last: pagination.last,
            numberPerPage: pagination.numberPerPage
        }
    }
}