import {useState} from 'react'
import Button from "components/Button/Button.jsx";
import Statistics from "components/Statistics/Statistics.jsx";
import Loading from "components/Loading/Loading.jsx";

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);


    const [isLoading, setIsLoading] = useState(true);

    const onFinishLoading = () => {
        setIsLoading(false);
    };

    const handleFeedback = (feedback) => {
        console.log(feedback);
        console.log("HANDLE FEEDBACK")
        console.log(feedback.target.innerText);
        switch (feedback.target.innerText) {
            case 'good':
                setGood(good + 1);
                break;
            case 'neutral':
                setNeutral(neutral + 1);
                break;
            case 'bad':
                setBad(bad + 1);
                break;
            default:
                break;
        }
        console.log("GOOD", good);
        console.log("NEUTRAL", neutral);
        console.log("BAD", bad);
    }


    return (

        <div>
            {isLoading ?
                (<Loading onFinishLoading={onFinishLoading}></Loading>) :

                (<><h1>Give Feedback</h1>
                    <Button name={"good"} onClick={(good) => handleFeedback(good)}></Button>
                    <Button name={"neutral"} onClick={(neutral) => handleFeedback(neutral)}></Button>
                    <Button name={"bad"} onClick={(bad) => handleFeedback(bad)}></Button>
                    <Statistics good={good} neutral={neutral} bad={bad}></Statistics></>)}
        </div>
    )
};

export default App;