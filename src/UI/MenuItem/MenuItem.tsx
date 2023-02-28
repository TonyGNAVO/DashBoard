import MenuItemCss from "./MenuItem.module.scss"

const MenuItem = () => {
    return (
        <a href="0">
            <div className={MenuItemCss.menuItem}>
                <div className={MenuItemCss.menuItemIcon}>

                </div>
                <div className={MenuItemCss.menuItemText}>
                    <span className={MenuItemCss.menuItemTextWrapper}>
                        Overview
                    </span>
                </div>
            </div>
        </a>
    )
}

export default MenuItem;