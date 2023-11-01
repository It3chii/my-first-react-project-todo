import React, {useEffect}  from "react";
import {auth} from "./Firebase.tsx";
import {useNavigate} from "react-router-dom";

const LoginRegister = () => {

  
  useEffect(() => {
    auth.onAuthStateChanged((user)=>{
      if(user) {
        navigate("/todo");
      }
    });
  },[]);

  const navigate = useNavigate(); 

  const handleLogin = () => {
    navigate('/login');
  }

  
  const handleRegister = () => {
    navigate('/register');
  }


  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-200 min-h-[600px] min-w-[600px]">
      <div className="w-2/5 h-1/2  bg-slate-300 border-none shadow-xl rounded-xl">
        <h1 className='text-center text-2xl m-4'>Please choose a option</h1>
        <div className='flex flex-row justify-center items-center m-16'>
          <button className='mr-5 bg-slate-200 rounded-md p-4 border border-solid shadow-lg border-gray-900  hover:border-slate-100 transition duration-300 ease-in-out' onClick={handleLogin} >Login</button>
          <button className=' bg-slate-200 rounded-md p-4 border border-solid shadow-lg border-gray-900  hover:border-slate-100 transition duration-300 ease-in-out' onClick={handleRegister}>Register</button>
        </div>
      </div>
    </div>
  )
}

export default LoginRegister