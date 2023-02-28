import sideBar from "./SideBar.module.scss"
import Menu from "../Menu/Menu"

const SideBar = () => {

    return (
        <aside className={sideBar.sidebar}>
            <Menu />
        </aside>
    )
}

export default SideBar