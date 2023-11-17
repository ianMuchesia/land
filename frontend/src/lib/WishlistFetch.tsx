import { fetchWishlist } from '@/redux/Features/wishlistSlice';
import { useAppDispatch, useAppSelector } from '@/redux/Hooks';
import React, { useEffect } from 'react'


interface Props {
    children: React.ReactNode;
}
const WishlistFetch = ({children}:Props) => {

    const dispatch = useAppDispatch()

    const user = useAppSelector(state => state.auth.isAuthenticated)
    
    let isFirstRender = true
    useEffect(()=>{
        if (user && isFirstRender) {
            dispatch(fetchWishlist());
            isFirstRender = false
          }
    },[user])

    return <div>{children}</div>;
}

export default WishlistFetch