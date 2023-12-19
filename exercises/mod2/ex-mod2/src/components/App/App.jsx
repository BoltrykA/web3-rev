import Button from "components/Button/Button.jsx";
import Display from "components/Display/Display.jsx";
import {useState} from "react";
import {useLocalStorage} from "../../hooks/useLocalStorage.js";

const App = () => {
    const [counter, setCounter] = useLocalStorage("counter", 0)

    function changeCount(delta) {
        setCounter(counter + delta);
    }

    const handleClick = (e) => {
        const delta = parseInt(e.target.dataset.delta);
        changeCount(delta);
    };


    return (
        <div>
            <Display counter={counter} />
            <Button onClick={handleClick} text="CLICK TO DECREMENT" number={"-1"} />
            <Button onClick={handleClick} text="CLICK TO INCREMENT" number={"+1"} />
            <Button onClick={handleClick} text="CLICK TO RESET" number={-counter} />

        </div>
    )
}

export default App;