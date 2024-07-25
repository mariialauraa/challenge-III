import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
