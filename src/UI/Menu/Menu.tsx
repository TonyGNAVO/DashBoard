import MenuItem from "../MenuItem/MenuItem"

const itemsText = ["Overview", "Tickets", "Ideas", "Contacts", "Agents", "Articles", "Settings", "Subscription"]
const Menu = () => {

    return (
        <div >
            {
                itemsText.map(t => <MenuItem text={t} />)
            }

        </div>
    )
}

export default Menu