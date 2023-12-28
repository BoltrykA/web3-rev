import { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import {ALL_AUTHORS, ALL_BOOKS} from "./queries";
import {useQuery} from "@apollo/client";

const App = () => {
  const [page, setPage] = useState('authors')

    const result = useQuery(ALL_AUTHORS, {
        pollInterval: 2000
    })

    const resultBooks = useQuery(ALL_BOOKS, {
        pollInterval: 2000
    })

    console.log(resultBooks);

    if (result.loading || resultBooks.loading)  {
        return <div>loading...</div>
    }

    const authors = result.data.allAuthors;
    const books = resultBooks.data.allBooks;

  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={() => setPage('add')}>add book</button>
      </div>

      <Authors show={page === 'authors'} authors={authors} />

      <Books show={page === 'books'} books={books} />

        {page === 'add' && <NewBook />}
    </div>
  )
}

export default App
