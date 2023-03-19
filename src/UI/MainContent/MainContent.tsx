import MainContentCss from "./style.module.scss";
import { TicketsContent } from "../TicketsContent/TicketsContent";

import { OverviewContent } from "../OverviewContent/OverviewContent";

import { useParams } from "react-router-dom";

const MainContent = () => {
    const { tab } = useParams();
    return (
        <main className={MainContentCss.maincontent}>
            {tab === "overview" || !tab ? (
                <OverviewContent />
            ) : tab === "tickets" ? (
                <TicketsContent />
            ) : null}
        </main>
    );
};

export default MainContent;
