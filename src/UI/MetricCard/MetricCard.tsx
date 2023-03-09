import { FC } from "react";
import MetricCardCss from "./MetricCard.module.scss"

type MetricCardProps = { title: string, value: number }
const MetricCard: FC<MetricCardProps> = ({ title, value }) => {

    return (
        <div className={MetricCardCss.metricCard}>
            <p className={MetricCardCss.metricCardTitle}>
                {title}
            </p>
            <div className={MetricCardCss.metricCardValue}>
                <p>{value}</p>
            </div>
        </div>
    )
}

export default MetricCard;