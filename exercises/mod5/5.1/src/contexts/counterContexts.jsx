/* eslint-disable react/prop-types */
import React, {useState} from "react";

const Context = React.createContext(null);

const CounterWrapper = (props) => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleFeedback = (feedback) => {
        const buttonText = feedback.target.innerText;
        switch (buttonText) {
            case 'good':
                setGood(good + 1);
                break;
            case 'ok':
                setNeutral(neutral + 1);
                break;
            case 'bad':
                setBad(bad + 1);
                break;
            case 'reset':
                setGood(0);
                setNeutral(0);
                setBad(0);
                break;
            default:
                break;
        }
    }

    const exposedValue = {
        good,
        neutral,
        bad,
        handleFeedback
    };


    return (
        <Context.Provider value={exposedValue}>
            {props.children}
        </Context.Provider>
    );
}


export {
    Context,
    CounterWrapper
}