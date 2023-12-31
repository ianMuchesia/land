import React from 'react'
import { Icon } from '@iconify/react';
import { useAppDispatch } from '@/redux/Hooks';
import { useRouter } from 'next/router';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '@/lib/firebase';
import { toast } from 'react-toastify';
import { setIsAuthenticated } from '@/redux/Features/authSlice';

const Oauth = () => {

    const dispatch = useAppDispatch()

    const router = useRouter()

    const handleGoogleClick = async()=>{


        try {
            
        const provider = new GoogleAuthProvider()
        const auth = getAuth(app)

        const result = await signInWithPopup(auth, provider)

       


        const settings = {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: result.user.displayName,
                email: result.user.email,
            }),
            credentials: 'include' as RequestCredentials,
          };
          
     
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/google`,
         settings
            );
        
  
        const data = await response.json();
        // enter you logic when the fetch is successful

       
  
        if(data?.msg){
          toast.warning(data.msg);
          return;
        }
        const {name , userId , role} = data?.user
        dispatch(setIsAuthenticated({
            name,
            userId,
            role
        }))
          toast.success("Login successful!");
          setTimeout(() => {
  
  const returnUrl = localStorage.getItem('returnUrl');
          
         
            if (returnUrl) {
              localStorage.removeItem('returnUrl'); // Clear the stored URL
              router.push(returnUrl);
            } else {
              // If no return URL is stored, redirect to a default route
              router.push('/');
            }
          }, 1000);
        } catch (error:any) {
            console.log(error);
       
          
            if (error.response?.data?.msg) {
              toast.error(error.response.data.msg);
              return;
            }
            toast.error("Something wrong happened try again later");
        }
        
    
    }
  return (
    <div className="flex items-center justify-center gap-2 flex-col">
      <h1 className="text-2xl uppercase">OR</h1>
          <button
      onClick={handleGoogleClick}
      type='button'
      className='flex justify-evenly items-center gap-4 bg-gray-200 p-3 rounded-lg uppercase hover:opacity-95 w-full'
    >

<Icon icon="flat-color-icons:google" />
        <span>Continue With Google</span>
    </button>
       
    </div>
  )
}

export default Oauth