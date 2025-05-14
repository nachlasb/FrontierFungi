import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Import fonts
const fontStyles = document.createElement('link');
fontStyles.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@300;400;600&display=swap";
fontStyles.rel = "stylesheet";
document.head.appendChild(fontStyles);

createRoot(document.getElementById("root")!).render(<App />);
