import MetricStatCSS from "./MetricStatItem.module.scss"
import { FC } from "react"


type Props = { title: string, value: string };
const MetricStatItem: FC<Props> = ({ title, value }) => {

    return (
        <div className={MetricStatCSS.metricCardItem}>
            <p className={MetricStatCSS.metricCardItemTitle}>{title}</p>
            <p className={MetricStatCSS.metricCardItemValue}>{value}</p>
        </div>
    )
}

export default MetricStatItem