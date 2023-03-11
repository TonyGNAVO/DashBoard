import DiagramCss from "./Diagram.module.scss"
import Graph from "./../../Images/Graph.png"
const Diagram = () => {
    return (
        <>
            <h2 className={DiagramCss.diagramTitle}>
                Today's trends
            </h2>
            <p className={DiagramCss.diagramDescription}>
                as of 25 May 2019, 09:41 PM
            </p>
            <div className={DiagramCss.diagramLabel}>
                <div className={DiagramCss.diagramLabelItem}>
                    <div className={`${DiagramCss.diagramLabelTodayStick} ${DiagramCss.stick} `}></div>
                    <p>Today</p>
                </div>
                <div className={DiagramCss.diagramLabelItem}>
                    <div className={`${DiagramCss.diagramLabelYesterdayStick} ${DiagramCss.stick} `}></div>
                    <p>Yesterday</p>
                </div>
            </div>
            <figure className={DiagramCss.diagramMedia}>
                <img className={DiagramCss.diagramMediaImage} src={Graph} alt="Today's trands diagram"></img>
            </figure>
        </>
    )
}

export default Diagram;