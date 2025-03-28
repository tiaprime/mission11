import './App.css'
import { CartProvider } from './context/CartContext'
import CartPage from './pages/CartPage'
import DonatePage from './pages/DonatePage'
import BooksPage from './pages/BooksPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BuyPage from './pages/BuyPage'

function App() {
  // const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  return (
    <>
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="/projects" element={<BooksPage />}  />
          <Route path="/donate/:bookID/:title/:author/:isbn/:price" element={<DonatePage />} />
          <Route path="/kill" element={<BuyPage />} />
          <Route path="/cart/" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>


    </>
  )

  // return (
  //   <>
  //   <div className='container mt-4'>
  //     <div className='row bg-primary text-white '>
  //       <Welcome/>
  //     </div>
  //     <div className='row'>
  //         <div className='col-md-3'>
  //           <CategoryFilter selectedCategories={selectedCategories}
  //           setSelectedCategories={setSelectedCategories}/>
  //         </div>
  //         <div className='col-md-9'>
  //           <BookList selectedCategories={selectedCategories}/>
  //         </div>
  //     </div>

  //   </div>
  //   </>
  // )
}

export default App
