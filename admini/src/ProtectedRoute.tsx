import  { Children } from 'react'
import { Navigate } from 'react-router-dom'
interface Props{
    user:boolean;
}
const ProtectedRoute = (props:Props) => {
    if(!props.user){
        return <Navigate to='/'/>
    }
  return Children;
}

export default ProtectedRoute