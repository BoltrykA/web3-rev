import {useEffect, useState} from 'react'
import Filter from "/src/components/Filter/Filter.jsx";
import PersonForm from "/src/components/PersonForm/PersonForm.jsx";
import Persons from "/src/components/Persons/Persons.jsx";
import {getAll, create} from "/src/services/persons"

const App = () => {
    const [persons, setPersons] = useState([]);

    // form input element
    const [newName, setNewName] = useState('');

    const [newNumber, setNewNumber] = useState('');

    const [filter, setFilter] = useState('');


    useEffect(() => {
        console.log('Fetching initial data...');
        getAll()
            .then((initialPersons) => {
                setPersons(initialPersons);
            })
            .catch((error) => {
                console.error('Error fetching initial data:', error);
            });
    }, []);


    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setFilter(event.target.value)
    }

    const handleNewNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNewNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }


    const addNewPerson = (event) => {
        event.preventDefault();

        // Check if name or number already exists in persons
        const nameExists = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase());
        const phoneNumberExists = persons.find((person) => person.number === newNumber);
        if (nameExists || phoneNumberExists) {
            alert(`Name ${newName} or number ${newNumber} is already added to the phonebook`);
            return;
        }

        // Create a new person object with a temporary ID (just for the UI)
        const personObject = {
            name: newName,
            number: newNumber,
        };

        // Update the UI optimistically (before actual server update)
        setPersons([...persons, personObject]);

        // Reset form fields
        setNewName('');
        setNewNumber('');

        // Create the new person in the database
        create(personObject)
            .then((createdPerson) => {
                // Update the person in the state with the received ID from the server
                setPersons([...persons.filter((person) => person.id !== createdPerson.id), createdPerson]);
            })
            .catch((error) => {
                console.error('Error creating person:', error);
                // Revert changes on error by refetching the data
                getAll().then((updatedPersons) => {
                    setPersons(updatedPersons);
                });
            });
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter value={filter} onChange={handleFilterChange}/>

            <PersonForm
                newName={newName}
                newNumber={newNumber}
                handleNameChange={handleNewNameChange}
                handleNumberChange={handleNewNumberChange}
                handleSubmit={addNewPerson}
            />

            <Persons persons={persons} filter={filter}/>
        </div>
    )
}

export default App;