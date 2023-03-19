import MenuItem from "../MenuItem/MenuItem";
import MenuDivider from "../MenuDivider/MenuDivider";
import { useParams } from "react-router-dom";

type MenuItemProps = {
    id: number;
    contentText: string;
    link: string;
    active: boolean;
};

const Menu = () => {
    const menuItemProps: MenuItemProps[] = [
        { id: 1, contentText: "Overview", link: "overview", active: false },
        { id: 2, contentText: "Tickets", link: "tickets", active: false },
        { id: 3, contentText: "Ideas", link: "ideas", active: false },
        { id: 4, contentText: "Contacts", link: "contacts", active: false },
        { id: 5, contentText: "Agents", link: "agents", active: false },
        { id: 6, contentText: "Articles", link: "articles", active: false },
    ];
    const menuItemProps2: MenuItemProps[] = [
        { id: 7, contentText: "Settings", link: "setting", active: false },
        {
            id: 8,
            contentText: "Subscription",
            link: "subscription",
            active: false,
        },
    ];

    const { tab } = useParams();
    const activeItem = menuItemProps.find((item) => item.link === tab);
    activeItem ? (activeItem.active = true) : null;

    return (
        <div>
            {menuItemProps.map((item) => (
                <MenuItem
                    key={item.id}
                    active={item.active}
                    text={item.contentText}
                    link={item.link}
                />
            ))}
            <MenuDivider />
            {menuItemProps2.map((item) => (
                <MenuItem
                    key={item.id}
                    active={item.active}
                    text={item.contentText}
                    link={item.link}
                />
            ))}
        </div>
    );
};

export default Menu;
