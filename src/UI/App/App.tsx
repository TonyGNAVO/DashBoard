import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import "./Reset.module.scss";
import DashBoard from "../DashBoard/DashBoard";

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DashBoard />} />
                    <Route path="/:tab" element={<DashBoard />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

const container = document.getElementById("root");

if (!container) {
    throw new Error("no container to render to");
}

const root = createRoot(container);
root.render(<App />);
