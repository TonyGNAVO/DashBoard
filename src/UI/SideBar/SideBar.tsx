import sideBar from "./SideBar.module.scss"
import Menu from "../Menu/Menu"
import DashBoardIdentity from "../DashBoardIdentity/DashBoardIdentity"

const SideBar = () => {

    return (
        <aside className={sideBar.sidebar}>
            <DashBoardIdentity />
            <Menu />
        </aside>
    )
}

export default SideBar