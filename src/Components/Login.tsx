import { useState, useEffect, ChangeEvent } from "react";
import { signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "./Firebase.tsx";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user)=>{
      if(user) {
        navigate("/todo");
      }
    });
  },[]);

  // e steht fuer das event-Objekt, wenn ein ereignis geschieht (hier der OnChange)
  //.target ist die Referenz auf das Element, dass das ereignis ausloest(in dem Fall das eingabefeld)
  //.value ist dann der Wert in dem target
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password).then(() => navigate('/todo')).catch((err) => alert(err.message));
  };

  return (

      <div className="w-screen h-screen bg-slate-200 min-h-[600px] min-w-[600px] flex items-center justify-center ">
        <div className="w-2/5 h-1/2  bg-slate-300 border-none shadow-xl rounded-xl flex flex-col items-center ">
          <h1 className=' text-2xl m-4'>Login</h1>
          <div className="flex flex-col mt-16">
          <p>mail</p>
          <input className="w-full text-xl rounded-lg p-1 outline-none" type="email" onChange={handleEmailChange} value={email}/>
          <p>password</p>
          <input className="w-full text-xl rounded-lg p-1 outline-none" type="password" onChange={handlePasswordChange} value={password}/>
          </div>
          <button className='mt-5 bg-slate-200 rounded-md p-2 border border-solid shadow-lg border-gray-900  hover:border-slate-100 transition duration-300 ease-in-out' onClick={handleLogin}>Login</button>
          <a href="/register" className=" mt-2">I don't have an account</a>
        </div>
      </div>

  )

}

export default Login;