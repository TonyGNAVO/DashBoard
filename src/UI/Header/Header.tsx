import HeaderCss from "./Header.module.scss"
import { useParams } from "react-router-dom"

const Header = () => {
    const { tab } = useParams();
    return (
        <header className={HeaderCss.header}>
            <h1 className={HeaderCss.headerTitle}>{tab ? tab : "overview"}</h1>
            <div className={HeaderCss.headerSearchIcon}></div>
            <div className={HeaderCss.headerNotificationIcon}></div>
            <div className={HeaderCss.headerDivider}></div>
            <p className={HeaderCss.headerUserName}>Jones Ferdinand</p>
            <div className={HeaderCss.headerUserPhoto}>
                <div className={HeaderCss.headerUserPhotoWrapper}></div>
            </div>
        </header>
    )
}

export default Header