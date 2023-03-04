import MenuItem from "../MenuItem/MenuItem"
import MenuDivider from "../MenuDivider/MenuDivider"
import OverviewIcon from "../../Images/Overview.svg"
import TicketsIcon from "../../Images/Tickets.svg"
import IdeasIcon from "../../Images/Ideas.svg"
import ContactsIcon from "../../Images/Contacts.svg"
import AgentsIcon from "../../Images/Agents.svg"
import ArticlesIcon from "../../Images/Articles.svg"
import SettingsIcon from "../../Images/Settings.svg"
import SubscriptionIcon from "../../Images/Subscription.svg"



type MenuItemProps = { id: number, contentText: string, icon: string }

const menuItemProps: MenuItemProps = [{ id: 1, contentText: "Overview", icon: OverviewIcon },
{ id: 2, contentText: "Tickets", icon: TicketsIcon },
{ id: 3, contentText: "Ideas", icon: IdeasIcon },
{ id: 4, contentText: "Contacts", icon: ContactsIcon },
{ id: 5, contentText: "Agents", icon: AgentsIcon },
{ id: 6, contentText: "Articles", icon: ArticlesIcon }]

const menuItemProps2: MenuItemProps = [{ id: 7, contentText: "Settings", icon: SettingsIcon },
{ id: 8, contentText: "Subscription", icon: SubscriptionIcon }]




const Menu = () => {

    return (
        <div >
            {
                menuItemProps.map(item => <MenuItem key={item.id} text={item.contentText} src={item.icon} />)
            }
            <MenuDivider />
            {
                menuItemProps2.map(item => <MenuItem key={item.id} text={item.contentText} src={item.icon} />)
            }
        </div>
    )
}

export default Menu