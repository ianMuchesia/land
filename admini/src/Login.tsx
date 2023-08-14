import React from 'react'
import { useNavigate } from 'react-router-dom';
interface Props{
    setUser: React.Dispatch<React.SetStateAction<boolean>>;
}
const Login = ({setUser}:Props) => {
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={()=>{setUser(true); navigate("/")}}>Click</button>
    </div>
  )
}

export default Login