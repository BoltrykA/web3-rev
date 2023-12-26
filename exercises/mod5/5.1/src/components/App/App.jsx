import Button from "components/Button/Button.jsx";
import Statistics from "components/Statistics/Statistics.jsx";

import {useContext} from "react";
import { Context as CounterContext } from "../../contexts/counterContexts";
const App = () => {

    const { good, neutral, bad, handleFeedback } = useContext(CounterContext);

    return (

        <div>
                <><h1>Give Feedback</h1>
                    <Button name={"good"} onClick={(good) => handleFeedback(good)}></Button>
                    <Button name={"ok"} onClick={(neutral) => handleFeedback(neutral)}></Button>
                    <Button name={"bad"} onClick={(bad) => handleFeedback(bad)}></Button>
                    <Button name={"reset"} onClick={(reset) => handleFeedback(reset)}></Button>
                    <Statistics good={good} neutral={neutral} bad={bad}></Statistics></>
        </div>
    )
};

export default App;