import MenuCss from "./Menu.module.scss"
import MenuItem from "../MenuItem/MenuItem"

const Menu = () => {

    return (
        <div className={MenuCss.menuItemText}>
            <MenuItem />
        </div>
    )
}

export default Menu