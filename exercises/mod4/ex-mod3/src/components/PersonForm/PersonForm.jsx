const PersonForm = ({handleSubmit, handleNameChange, handleNumberChange, newName, newNumber}) => {
    return (
        <>
            <h3>Add a new</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    name: <input onChange={handleNameChange} value={newName}/>
                </div>
                <div>
                    number: <input onChange={handleNumberChange} value={newNumber}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    )
}

export default PersonForm;