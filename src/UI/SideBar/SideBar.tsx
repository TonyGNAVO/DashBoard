import sideBar from "./style.module.scss";
import Menu from "../Menu/Menu";
import DashBoardIdentity from "../DashBoardIdentity/DashBoardIdentity";

const SideBar = () => {
    return (
        <aside className={sideBar.sidebar}>
            <div className={sideBar.sidebarWrapper}>
                <DashBoardIdentity />
                <Menu />
            </div>
        </aside>
    );
};

export default SideBar;
