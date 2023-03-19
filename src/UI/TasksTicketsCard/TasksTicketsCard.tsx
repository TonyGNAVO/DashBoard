import Css from "./style.module.scss";
import { FC } from "react";

type Props = { children: JSX.Element };
console.log(Css);

export const TasksTicketsCard: FC<Props> = ({ children }) => {
    return (
        <div className={Css.tasksTicketsCard}>
            {children}
        </div>);
};
