import MenuItem from "../MenuItem/MenuItem"
import MenuDivider from "../MenuDivider/MenuDivider"
const itemsText = ["Overview", "Tickets", "Ideas", "Contacts", "Agents", "Articles"]
const itemText2 = ["Settings", "Subscription"]
const Menu = () => {

    return (
        <div >
            {
                itemsText.map(t => <MenuItem text={t} />)
            }
            <MenuDivider />
            {
                itemText2.map(t => <MenuItem text={t} />)
            }
        </div>
    )
}

export default Menu