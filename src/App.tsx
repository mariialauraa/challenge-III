import { BrowserRouter } from 'react-router-dom';
import { ProductsProvider } from './context/ProductsContext';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';

function App() {

    return (
        <div>
            <ProductsProvider>
                <BrowserRouter>
                    <AuthProvider>
                        <AppRoutes />
                    </AuthProvider>
                </BrowserRouter>
            </ProductsProvider>
        </div>
    )
}

export default App
