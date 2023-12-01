import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "./redux/hooks"




const ProtectedRoutes = () => {

    const auth = useAppSelector(state => state.auth.isAuthenticated)

    return auth ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes