import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from './pages/Home';
import Shop from './pages/Shop';
import { ProductsProvider } from './context/ProductsContext';
import SingleProduct from './pages/SingleProduct';
import Contact from './pages/Contact';

function App() {

  return (
    <div>
      <ProductsProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />}/>
            <Route path="/product/:id" element={<SingleProduct />}/>
            <Route path='/contact' element={<Contact />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </ProductsProvider>
    </div>
  )
}

export default App
