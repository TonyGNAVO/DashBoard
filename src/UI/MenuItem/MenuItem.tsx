import MenuItemCss from "./MenuItem.module.scss"
import { Link } from "react-router-dom";
import MenuItemIcon from "../MenuItemIcon/MenuItemIcon";
import { FC } from "react";


type MenuItemPropsType = {
    text: string,
    link: string,
    active: boolean
}
const MenuItem: FC<MenuItemPropsType> = ({ text, link, active }) => {

    return (
        <Link to={`/${link}`}>
            <div className={active ? `${MenuItemCss.menuItem} ${MenuItemCss.menuItemActive}` : `${MenuItemCss.menuItem}`}>
                <div className={MenuItemCss.menuItemIcon}>
                    <MenuItemIcon text={text} active={active} />
                </div>
                <span className={MenuItemCss.menuItemText}>
                    <span className={active ? `${MenuItemCss.menuItemTextWrapper} ${MenuItemCss.menuItemTextWrapperActive}` : `${MenuItemCss.menuItemTextWrapper}`}>
                        {text}
                    </span>
                </span>
            </div>
        </Link>
    )
}

export default MenuItem;