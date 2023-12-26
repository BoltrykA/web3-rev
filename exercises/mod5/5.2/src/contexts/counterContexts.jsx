/* eslint-disable react/prop-types */
// Context.js
import React, { useState } from "react";

const Context = React.createContext(null);

const CounterWrapper = (props) => {
    const [opinions, setOpinions] = useState([
        { name: "a", counter: 0, uuid: generateUUID() },
        { name: "b", counter: 0, uuid: generateUUID() },
        { name: "c", counter: 0, uuid: generateUUID() },
    ]);

    const handleFeedback = (opinionName) => {
        const updatedOpinions = opinions.map((opinion) => {
            if (opinion.name === opinionName) {
                return { ...opinion, counter: opinion.counter + 1 };
            }
            return opinion;
        });

        setOpinions(updatedOpinions.sort((a, b) => b.counter - a.counter));
    };

    const addOpinion = (newOpinionName) => {
        const newOpinion = {
            name: newOpinionName,
            counter: 0,
            uuid: generateUUID(),
        };

        setOpinions([...opinions, newOpinion]);
    };

    const exposedValue = {
        opinions,
        handleFeedback,
        addOpinion,
    };

    return (
        <Context.Provider value={exposedValue}>
            {props.children}
        </Context.Provider>
    );
};

function generateUUID() {
    return Math.random().toString(36).substr(2, 9);
}

export { Context, CounterWrapper };

