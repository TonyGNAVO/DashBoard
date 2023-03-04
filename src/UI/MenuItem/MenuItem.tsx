import MenuItemCss from "./MenuItem.module.scss"
import { Link } from "react-router-dom";

const MenuItem = ({ text, src, link, active }) => {

    return (
        <Link to={`/${link}`}>
            <div className={active ? `${MenuItemCss.menuItem} ${MenuItemCss.menuItemActive}` : `${MenuItemCss.menuItem}`}>
                <div className={MenuItemCss.menuItemIcon}>
                    <img className={MenuItemCss.menuItemImage} src={src} alt={text} />
                </div>
                <span className={MenuItemCss.menuItemText}>
                    <span className={MenuItemCss.menuItemTextWrapper}>
                        {text}
                    </span>
                </span>
            </div>
        </Link>
    )
}

export default MenuItem;