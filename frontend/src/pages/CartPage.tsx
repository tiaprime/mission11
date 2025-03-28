import { useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { CartItem } from "../types/CartItem"

function CartPage () {
    const navigate = useNavigate()
    const { cart, removeFromCart } = useCart()


    // Calculate total price
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);


    return(<div>
        <h2>Your Cart</h2>

        <div>
            {cart.length === 0 ? (<p>your cart is empty</p>) : 
            (<ul>
                {cart.map((item: CartItem) => 
                <li  
                key={item.bookID}> {item.title}: ${item.price}
                <button onClick={() => removeFromCart(item.bookID)}> Remove item</button>
                </li>
                
                )}
            </ul>)
            }
        </div>

        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button>Checkout: </button>
        <button onClick={() => navigate('/projects')}>Continue Browsing</button>


    </div>
    )
}

export default CartPage