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
import { useParams } from "react-router-dom"



type MenuItemProps = { id: number, contentText: string, icon: string, link: string, active: boolean }




const Menu = () => {
    const menuItemProps: MenuItemProps[] = [
        { id: 1, contentText: "Overview", icon: OverviewIcon, link: "overview", active: false },
        { id: 2, contentText: "Tickets", icon: TicketsIcon, link: "tickets", active: false },
        { id: 3, contentText: "Ideas", icon: IdeasIcon, link: "ideas", active: false },
        { id: 4, contentText: "Contacts", icon: ContactsIcon, link: "contacts", active: false },
        { id: 5, contentText: "Agents", icon: AgentsIcon, link: "agents", active: false },
        { id: 6, contentText: "Articles", icon: ArticlesIcon, link: "articles", active: false }
    ]
    const menuItemProps2: MenuItemProps[] = [
        { id: 7, contentText: "Settings", icon: SettingsIcon, link: "setting", active: false },
        { id: 8, contentText: "Subscription", icon: SubscriptionIcon, link: "subscription", active: false }
    ]
    const { tab } = useParams();
    const activeItem = menuItemProps.find(item => item.link === tab)
    activeItem ? activeItem.active = true : null

    return (
        <div >
            {
                menuItemProps.map(item => <MenuItem
                    key={item.id}
                    active={item.active}
                    src={item.icon}
                    text={item.contentText}
                    link={item.link} />
                )
            }
            <MenuDivider />
            {
                menuItemProps2.map(item => <MenuItem
                    key={item.id}
                    src={item.icon}
                    active={item.active}
                    text={item.contentText}
                    link={item.link} />
                )
            }
        </div>
    )
}

export default Menu