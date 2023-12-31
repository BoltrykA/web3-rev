import {useQuery} from "@apollo/client";
import Persons from "../Persons/Persons";
import {ALL_PERSONS} from "../../queries.js";
import PersonForm from "../PersonForm/PersonForm.jsx";
import {useState} from "react";
import PhoneForm from "../PhoneForm/PhoneForm.jsx";

const App = () => {
    const [errorMessage, setErrorMessage] = useState(null)
    const result = useQuery(ALL_PERSONS, {
        pollInterval: 2000
    })

    if (result.loading) {
        return <div>loading...</div>
    }

    const notify = (message) => {
        setErrorMessage(message)
        setTimeout(() => {
            setErrorMessage(null)
        }, 10000)
    }

    return (
        <>
            <Notify errorMessage={errorMessage}/>
            <Persons persons={result.data.allPersons}/>
            <PersonForm setError={notify}/>
            <PhoneForm setError={notify}/>
        </>
    )
}

const Notify = ({errorMessage}) => {
    if (!errorMessage) {
        return null
    }
    return (
        <div style={{color: 'red'}}>
            {errorMessage}
        </div>
    )
}

export default App;