import MainContentCss from "./MainContent.module.scss";

import MetricCards from "../MetricCards/MetricCards";
import MetricsStats from "../MetricStats/MetricStats";
import TasksTickets from "../TasksTickets/TasksTickets";
import { TicketTable } from "../TicketTable/TicketTable";

import { useParams } from "react-router-dom";

const MainContent = () => {
    const { tab } = useParams();
    return (
        <main className={MainContentCss.maincontent}>
            {tab === "overview" || !tab ? (
                <>
                    <MetricCards />
                    <MetricsStats />
                    <TasksTickets />
                </>
            ) : tab === "tickets" ? (
                <TicketTable />
            ) : null}
        </main>
    );
};

export default MainContent;
