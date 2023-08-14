import  { useState, useEffect } from 'react';

const Loader=()=> {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {setLoaded(true); }, 500);
    return () => clearTimeout(timeout);
  }, []);

  
  return (
    <div
      className={`fixed left-0 top-0 z-[999999] flex h-screen w-screen items-center justify-center ${
        loaded ? 'hidden' : 'block'
      } bg-white`}
    >
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
    </div>
  );
}

export default Loader;
