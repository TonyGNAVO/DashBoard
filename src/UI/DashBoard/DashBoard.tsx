import { DashBoardWrapper } from "../DashBoardWrapper/DashBoardWrapper";
import SideBar from "../SideBar/SideBar";
import { responsive } from "./Responsive";
import { Content } from "../Content/Content";

responsive();

const DashBoard = () => {
    return (
        <DashBoardWrapper>
            {/* TODO REMETTRE*/}
            <SideBar />
            <Content />
        </DashBoardWrapper>
    );
};

export default DashBoard;
