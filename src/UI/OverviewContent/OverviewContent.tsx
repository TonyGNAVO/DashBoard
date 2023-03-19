import MetricCards from "../MetricCards/MetricCards";
import MetricsStats from "../MetricStats/MetricStats";
import TasksTickets from "../TasksTickets/TasksTickets";

export const OverviewContent = () => {
    return (
        <>
            <MetricCards />
            <MetricsStats />
            <TasksTickets />
        </>
    );
};
