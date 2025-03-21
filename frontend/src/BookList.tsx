import { useEffect, useState } from "react"
import {Book} from "./types/Book"



function BookList(){
    const [books, setBooks] = useState<Book[]>([])

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch('https://localhost:5000/Book/AllBooks');
            const data = await response.json()
            setBooks(data)
        } 

        fetchBooks()
    }, [])


    return(
        <>
        <h1>Welcome to my Books</h1>
        <br />
        {books.map((b) =>
        <div id="bookCard" className="card" key="{b.bookId}"> 
            <h3 className="card-title">{b.title}</h3>
            <div className="card-body">
                <ul className="list-unstyled">
                    <li> <strong>Title:</strong> {b.title}</li>
                    <li> <strong>Author:</strong> {b.author}</li>
                    <li> <strong>Publisher:</strong> {b.publisher} Individuals Served</li>
                    <li> <strong>ISBN:</strong> {b.isbn}</li>
                    <li> <strong>Classification/Category:</strong> {b.classification}/{b.category}</li>
                    <li> <strong>Number of Pages:</strong> {b.pageCount}</li>
                    <li> <strong>Price:</strong> {b.price}</li>
                </ul>
            </div>

        </div>
)}











        </>
    )
}

export default BookList