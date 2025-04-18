import React from "react";
import { useState } from "react";
import Header from ".././Header";
import Login from "./Login";
import Register from "./Register";
import { ToastContainer } from "react-toastify";

interface PageProps {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setUserId: (userId: string) => void;
}

const Page: React.FC<PageProps> = ({setIsLoggedIn, setUserId}) => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Register

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className='
      container 
      max-w-120 
      mt-4 
      ml-4
      p-4 
      bg-gray-100 
      max-h-200
      rounded-lg
    '>
      <Header 
            text='Cipher Safe' 
            subText='Store your passwords securely' 
            imgSrc='/lock.png'
          />
      {isLogin ?
        <Login toggleForm={toggleForm} setIsLoggedIn={setIsLoggedIn} setUserId={setUserId}/> :
        <Register toggleForm={toggleForm}/>
      }
      <ToastContainer />
    </div>
  );
}

export default Page;