import Css from "./style.module.scss";
import { FC } from "react";

type Props = { children: JSX.Element };

export const TasksTicketsCard: FC<Props> = ({ children }) => {
    return <div className={Css.tasksTicketsCard}>{children}</div>;
};
