import {useMutation} from "@apollo/client";
import {useEffect, useState} from "react";
import {EDIT_AUTHOR} from "../queries";

const AuthorForm = ({setError}) => {
    // allow to update birth year
    const [name, setName] = useState('');
    const [born, setBorn] = useState('');

    const [editAuthor, result] = useMutation(EDIT_AUTHOR);



    const submit = async (event) => {
        event.preventDefault();

        if (name === '') {
            setError('name is required');
            return;
        }

        if (born === '') {
            setError('born is required');
            return;
        }

        editAuthor({ variables: { name, setBornTo: parseInt(born) } });

        setName('');
        setBorn('');
    };

    useEffect(() => {
        if (result.data && result.data.editAuthor === null) {
            setError('author not found');
        }
    }, [result.data]);

    return (
        <div>
            <h2>Set birthyear</h2>
            <form onSubmit={submit}>
                <div>
                    name
                    <input
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </div>
                <div>
                    born
                    <input
                        type='number'
                        value={born}
                        onChange={({ target }) => setBorn(target.value)}
                    />
                </div>
                <button type='submit'>update author</button>
            </form>
        </div>
    );
}

export default AuthorForm;