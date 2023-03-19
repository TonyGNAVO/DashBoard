import Css from "./style.module.scss";

import { responsive } from "./Responsive";

import { FC } from "react";

responsive();

type props = { children: JSX.Element[] };

export const DashBoardWrapper: FC<props> = ({ children }) => {
    return (
        <div className={Css.dashboard}>
            <div className={Css.dashboardWrapper}>{children}</div>
        </div>
    );
};
