import { Navigate } from "react-router-dom"
import { auth } from "../components/Auth/firebaseConfig.ts"

const ProtectRoute = ({ children }: { children: JSX.Element }) => {
    const user = auth.currentUser
    
    if (user) {
        return children        
    } else {
        return <Navigate to="/login" />
    }
}

export default ProtectRoute