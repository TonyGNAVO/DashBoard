import MetricCardCss from "./MetricCards.module.scss"
import MetricCard from "../MetricCard/MetricCard"

console.log(MetricCardCss)
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