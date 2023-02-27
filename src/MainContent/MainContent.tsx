import MainContentCss from "./MainContext.module.scss"
import MetricCards from "../MetricCards/MetricCards"
const MainContent = () => {
    return (
        <main className={MainContentCss.maincontent}>
            <MetricCards />
        </main>
    )
}

export default MainContent