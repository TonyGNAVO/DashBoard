import dashBoard from "./DashBoard.module.scss"
import SideBar from "../SideBar/SideBar"
import Header from "../Header/Header"
import MainContent from "../MainContent/MainContent"

const DashBoard = () => {
    return (
        <div className={dashBoard.dashboard}>
            <div className={dashBoard.dashboardWrapper}>
                <SideBar />
                <div className={dashBoard.sideLeftContent}>
                    <div className={dashBoard.sideLeftContentWrapper}>
                        <Header />
                        <MainContent />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default DashBoard