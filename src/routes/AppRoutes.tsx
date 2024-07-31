import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import SingleProduct from '../pages/SingleProduct';
import Contact from '../pages/Contact';
import { Login } from '../components/Auth/Login';
import { Register } from '../components/Auth/Register';
import Checkout from '../pages/Checkout';
import Cart from '../pages/Cart';

const AppRoutes = () => {
    const location = useLocation()
    const hideHeaderFooter = ['/login', '/register'].includes(location.pathname)

    return (
        <>
            {!hideHeaderFooter && <Header />}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
                <Route path="/product/:id" element={<SingleProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
            {!hideHeaderFooter && <Footer />}
        </>
    )
}

export default AppRoutes;
