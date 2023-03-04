import MenuItemCss from "./MenuItem.module.scss"

const MenuItem = ({ text, src }) => {
    return (
        <a href="0">
            <div className={MenuItemCss.menuItem}>
                <div className={MenuItemCss.menuItemIcon}>
                    <img className={MenuItemCss.menuItemImage} src={src} alt={text} />
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