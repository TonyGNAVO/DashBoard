import MenuItemCss from "./MenuItem.module.scss"

const MenuItem = ({ text }) => {
    return (
        <a href="0">
            <div className={MenuItemCss.menuItem}>
                <div className={MenuItemCss.menuItemIcon}>
                    <img src="assets/images/Overview.svg" alt="" />
                </div>
                <span className={MenuItemCss.menuItemText}>
                    <span className={MenuItemCss.menuItemTextWrapper}>
                        {text}
                    </span>
                </span>
            </div>
        </a>
    )
}

export default MenuItem;