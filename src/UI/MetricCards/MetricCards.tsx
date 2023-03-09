import MetricCardCss from "./MetricCards.module.scss"
import MetricCard from "../MetricCard/MetricCard"

type cardProps = { id: number, title: string, value: number }

const cards: cardProps[] = [
    { id: 1, title: "Unresolved", value: 60 },
    { id: 2, title: "Overdue", value: 16 },
    { id: 3, title: "Open", value: 43 },
    { id: 4, title: "On hold", value: 64 }
]

const MetricCards = () => {

    return (
        <div className={MetricCardCss.metricCards}>

            {
                cards.map(card => <MetricCard key={card.id} title={card.title} value={card.value} />)
            }
        </div>
    )
}

export default MetricCards