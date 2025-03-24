import { useEffect, useState } from "react"
import {Book} from "./types/Book"



function BookList({selectedCategories}: {selectedCategories: string[]}){
    const [books, setBooks] = useState<Book[]>([])
    const [pageSize, setPageSize] = useState<number>(5)
    const [pageNum, setPageNum] = useState<number>(1)
    const [totalItems, setTotalItems] = useState<number>(0)
    const [totalPages, setTotalPages] = useState<number>(0)
    const [sort, setSort] = useState(false);


    useEffect(() => {
        const fetchBooks = async () => {
            const categoryParams = selectedCategories.map((cat) => `bookCategories=${encodeURIComponent(cat)}`).join('&');

            const response = await fetch(`https://localhost:5000/Book/AllBooks?pageSize=${pageSize}&pageNum=${pageNum}&sort=${sort}${selectedCategories.length ? `&${categoryParams}` : ''}`
            );
            const data = await response.json()
            setBooks(data.books)
            setTotalItems(data.totalNumBooks)
            setTotalPages(Math.ceil(totalItems/pageSize))
        } 

        fetchBooks()
    }, [pageSize, pageNum, totalItems, sort, selectedCategories])


    return(
        <>
        <br />
        {books.map((b) =>(
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
))}

<button disabled={pageNum === 1} onClick={ () => setPageNum(pageNum - 1) }> Previous </button>

{[...Array(totalPages)].map((_, index) => (
        <button
        key={index + 1} onClick={() =>setPageNum(index + 1)} 
        disabled={pageNum === (index + 1)}> {index + 1}</button>
    ))}

<button disabled={pageNum === totalPages} onClick={ () => setPageNum(pageNum + 1) }> Next </button> 


    <br />
    <label> 
        Results per page:
        <select
        value={pageSize}
        onChange={
            (p) => {setPageSize(Number(p.target.value))
            setPageNum(1)
            }}
        >

            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            </select>
    </label>

    <button onClick={() => setSort(!sort)}>
                Sort {sort ? "Default Order" : "Alphabetically"}
            </button>










        </>
    )
}

export default BookList