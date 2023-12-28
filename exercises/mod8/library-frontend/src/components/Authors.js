import AuthorForm from "./AuthorForm";
import {useState} from "react";



const Authors = (props) => {
    const [errorMessage, setErrorMessage] = useState(null)

  if (!props.show) {
    return null
  }

    const authors = props.authors;

    const notify = (message) => {
        setErrorMessage(message)
        setTimeout(() => {
            setErrorMessage(null)
        }, 10000)
    }

  return (
    <div>
        <Notify errorMessage={errorMessage}/>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <AuthorForm setError={notify} />
    </div>
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


export default Authors
