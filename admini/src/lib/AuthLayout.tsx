import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { Loader } from "../components"
import { checkAuthentication } from "../redux/authCheck";

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({children}:AuthLayoutProps) => {

    const dispatch = useAppDispatch()
    const auth = useAppSelector(state=>state.auth.isAuthenticated)


    useEffect(()=>{
        dispatch(checkAuthentication())
    
    },[auth])



    if (auth === null){
        return <Loader />
    } else{
        return (
            <div>
              {children}
            </div>
          )
    }

    
 
}

export default AuthLayout