const Persons = ({persons, filter}) => {
    return (
        <>
            <h3>Numbers</h3>
            {persons.map((person) => {
                if (person.name.toLowerCase().includes(filter.toLowerCase())) {
                    return<div key={person.id}>{person.name} {person.number}</div>
                }
            })
            }
        </>
    )
}

export default Persons;