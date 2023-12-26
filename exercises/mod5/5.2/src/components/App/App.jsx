import { useContext, useState } from "react";
import Button from "components/Button/Button.jsx";
import { Context as CounterContext } from "../../contexts/counterContexts";

const App = () => {
    const { handleFeedback, opinions, addOpinion } = useContext(CounterContext);
    const [newOpinionName, setNewOpinionName] = useState("");

    const handleInputChange = (event) => {
        setNewOpinionName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newOpinionName.trim() !== "") {
            addOpinion(newOpinionName);
            setNewOpinionName("");
        }
    };

    return (
        <div>
            <h1>Opinions</h1>

            {opinions.map((opinion) => (
                <Button
                    key={opinion.uuid}
                    letter={opinion.name}
                    counter={opinion.counter}
                    onClick={() => handleFeedback(opinion.name)}
                />
            ))}
            <br />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newOpinionName}
                    onChange={handleInputChange}
                    placeholder="Enter new opinion"
                />
                <button type="submit">Add Opinion</button>
            </form>
        </div>
    );
};

export default App;
