import { useNavigate, useParams } from "react-router-dom"
import Welcome from "../components/Welcome"
import { useCart } from '../context/CartContext'
// import { useState } from "react"
import { CartItem } from "../types/CartItem"

function DonatePage () {
    const navigate = useNavigate()
    const { title, bookID,author,isbn,price}  = useParams()
    const { addToCart } = useCart()
    // const [price, setDonationAmount] = useState<number>(0)

    const handleAddToCart = () => {
        const newItem: CartItem = {
            bookID: Number(bookID),
            title: title || "No Project Found",
            price: Number(price),
            author: String(author),
            isbn: String(isbn)
        }
            addToCart(newItem)
            navigate('/cart')
        }
    

    return(<>
        <Welcome />
        <h2>Add {title} by  {author} to cart</h2>    

        <div>
            <h3>Price: ${price}</h3>
            <p>ISBN: {isbn}</p>
            <button onClick={handleAddToCart}> Add to cart</button>
        </div>


        <button onClick={() => navigate(-1)}>Go Back</button>

    
    </>)
}

export default DonatePage