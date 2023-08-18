import React from 'react'
import {Alert} from '@mui/material'
import { useAppDispatch, useAppSelector } from '@/redux/Hooks';
import { closeNotification, showNotification } from '@/redux/Features/uiSlice';


interface Props{
  type:'error' | 'info' | 'success' | 'warning';
  message:string;
}
const Notification = ({type, message}:Props) => {

  

  const dispatch = useAppDispatch()
  const notification = useAppSelector(state=>state.ui)


  const handleClose = ()=>{
    dispatch(closeNotification())
  }

  return (
   <div className="">
   {notification.open &&<Alert severity={type} onClose={handleClose}>{message}</Alert>}
   </div>
  )
}

export default Notification