import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
    <div>
        <h1>Adopt Me!</h1>
        <Pet name="Bobo" animal="Dog" breed="Kokoni" />
        <Pet name="Paddington" animal="Bear" breed="Spectacled" />
        <Pet name="Eve" animal="Hamster" breed="Dwarf" />
    </div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
