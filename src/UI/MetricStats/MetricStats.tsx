import MetricStatsCss from "./style.module.scss";
import Diagram from "../Diagram/Diagram";
import MetricStatItem from "../MetricStatItem/MetricStatItem";

type MetricStatItemProps = { id: number; title: string; value: string };

const props: MetricStatItemProps[] = [
    { id: 1, title: "Resolved", value: "449" },
    { id: 2, title: "Received", value: "426" },
    { id: 3, title: "Average first response time", value: "33m" },
    { id: 4, title: "Average response time", value: "3h 8m" },
    { id: 5, title: "Resolution within SLA", value: "94%" },
];

const MetricsStats = () => {
    return (
        <div className={MetricStatsCss.metricStats}>
            <div className={MetricStatsCss.metricStatsDiagram}>
                <Diagram />
            </div>
            <div className={MetricStatsCss.metricStatsValue}>
                {props.map((p) => (
                    <MetricStatItem
                        key={p.id}
                        title={p.title}
                        value={p.value}
                    />
                ))}
            </div>
        </div>
    );
};

export default MetricsStats;
