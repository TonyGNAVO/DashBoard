import { createRoot } from "react-dom/client";
import "./Reset.module.scss";
import "./base.module.scss"
import DashBoard from "../DashBoard/DashBoard";


const App = () => {
  return (
    <DashBoard />
  );
};

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container to render to");
}

const root = createRoot(container);
root.render(<App />);
