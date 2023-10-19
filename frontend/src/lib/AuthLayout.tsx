// components/AuthLayout.js
import { useAppDispatch } from '@/redux/Hooks';
import { checkAuthentication } from '@/redux/services/authCheck';
import { useEffect } from 'react';

interface Props {
    children: React.ReactNode;
}

const AuthLayout = ({ children }:Props) => {

    const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(checkAuthentication());
  }, [dispatch]);

  return <div>{children}</div>;
};

export default AuthLayout;
