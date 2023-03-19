import DashBoardIdentityCss from "./DashBoardIdentity.module.scss";
import logo from "./../../Images/Logo.svg";
const DashBoardIdentity = () => {
    return (
        <div className={DashBoardIdentityCss.dashBoardIdentity}>
            <div className={DashBoardIdentityCss.dashBoardIdentityIcon}>
                <img
                    className={DashBoardIdentityCss.dashBoardIdentityImage}
                    src={logo}
                    alt="Dashboard Logo"
                />
            </div>
            <p className={DashBoardIdentityCss.dashBoardIdentityTitle}>
                Dashboard Kit
            </p>
        </div>
    );
};

export default DashBoardIdentity;
