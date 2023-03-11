import MetricStatsCss from "./MetricStats.module.scss"
import Diagram from "../Diagram/Diagram";
const MetricsStats = () => {


    return (
        <div className={MetricStatsCss.metricStats}>
            <div className={MetricStatsCss.metricStatsDiagram}>
                <Diagram />
            </div>
            <div className={MetricStatsCss.metricStatsValue}>
            </div>
        </div>
    )
}

export default MetricsStats;