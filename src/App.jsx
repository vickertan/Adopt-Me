import React from "react";
import { createRoot } from "react-dom";

const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ]);
};

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            animal: "Dog",
            name: "Bobo",
            breed: "Kokoni",
        }),
        React.createElement(Pet, {
            animal: "Bear",
            name: "Paddington",
            breed: "Spectacled",
        }),
        React.createElement(Pet, {
            animal: "Hamster",
            name: "Eve",
            breed: "Syrian",
        }),
    ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
