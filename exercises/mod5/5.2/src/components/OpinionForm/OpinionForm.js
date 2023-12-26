import { useState } from "react";

// eslint-disable-next-line react/prop-types
const OpinionForm = ({ addOpinion }) => {
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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newOpinionName}
                onChange={handleInputChange}
                placeholder="Enter new opinion"
            />
            <button type="submit">Add Opinion</button>
        </form>
    );
};

export default OpinionForm;
