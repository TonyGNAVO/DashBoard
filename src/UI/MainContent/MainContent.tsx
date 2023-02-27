import MainContentCss from "./MainContent.module.scss"
import MetricCards from "../MetricCards/MetricCards"
import MetricsStats from "../MetricStats/MetricStats"
import TasksTickets from "../TasksTickets/TasksTickets"
const MainContent = () => {
    return (
        <main className={MainContentCss.maincontent}>
            <MetricCards />
            <MetricsStats />
            <TasksTickets />
        </main>
    )
}

export default MainContent