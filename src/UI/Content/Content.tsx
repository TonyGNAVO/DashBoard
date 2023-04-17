import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";
import Css from "./style.module.scss";

export const Content = () => {
    return (
        <div className={Css.sideLeftContent}>
            <div className={Css.sideLeftContentWrapper}>
                <Header />
                <MainContent />
            </div>
        </div>
    );
};
