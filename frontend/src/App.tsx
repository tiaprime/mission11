import './App.css';
import { CartProvider } from './context/CartContext';
import CartPage from './pages/CartPage';
import DonatePage from './pages/DonatePage';
import BooksPage from './pages/BooksPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BuyPage from './pages/BuyPage';
import AdminBooksPage from './pages/AdminBooksPage';

function App() {
  // const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<BooksPage />} />
            <Route path="/projects" element={<BooksPage />} />
            <Route
              path="/donate/:bookID/:title/:author/:isbn/:price"
              element={<DonatePage />}
            />
            <Route path="/kill" element={<BuyPage />} />
            <Route path="/cart/" element={<CartPage />} />
            <Route path="/adminbooks/" element={<AdminBooksPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
