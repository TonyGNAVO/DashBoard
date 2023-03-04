import MetricCardCss from "./MetricCards.module.scss"
import MetricCard from "../MetricCard/MetricCard"

const MetricCards = () => {

    return (
        <div className={MetricCardCss.metricCards}>
            <MetricCard />
            <MetricCard />
            <MetricCard />
            <MetricCard />
        </div>
    )
}

export default MetricCards