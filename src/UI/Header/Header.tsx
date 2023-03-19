import HeaderCss from "./Header.module.scss";
import userPhoto from "../../Images/userPhoto.png";
import searchIcon from "../../Images/search.svg";
import notificationIcon from "../../Images/notification.svg";
import { useParams } from "react-router-dom";

const Header = () => {
    const { tab } = useParams();
    return (
        <header className={HeaderCss.header}>
            <h1 className={HeaderCss.headerTitle}>{tab ? tab : "overview"}</h1>
            <div className={HeaderCss.headerSearchIcon}>
                <img
                    className={HeaderCss.headerSearchIconImg}
                    src={searchIcon}
                    alt="search icon"
                />
            </div>
            <div className={HeaderCss.headerNotificationIcon}>
                <img
                    className={HeaderCss.headerNotificationIconImg}
                    src={notificationIcon}
                    alt="Notification icon"
                />
            </div>
            <div className={HeaderCss.headerDivider}></div>
            <p className={HeaderCss.headerUserName}>Jones Ferdinand</p>
            <div className={HeaderCss.headerUserPhotoMedia}>
                <figure className={HeaderCss.headerUserPhotoMediaWrapper}>
                    <img
                        className={HeaderCss.headerUserPhotoMediaImg}
                        src={userPhoto}
                        alt="profile picture"
                    />
                </figure>
            </div>
        </header>
    );
};

export default Header;
