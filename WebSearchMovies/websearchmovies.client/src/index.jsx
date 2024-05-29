import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import registerServiceWorker from "./src/registerServiceWorker.js";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
registerServiceWorker();
