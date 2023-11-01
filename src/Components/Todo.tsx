import Form from "./Form";
import {useNavigate} from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";
import { useEffect } from "react";


const Todo = () => {
 //damit man nur zu todo kann, wenn man auch angemeldet ist
 //useEffect sozusagen eine beim rendern aktivierte funktion
 //array, damit es nur 1 mal ausgefuehrt wird und direkt aktiv ist
 //Innerhalb des useEffect wird die onAuthStateChanged-Funktion aufgerufen und ein Beobachter für Änderungen des Authentifizierungszustands eingerichtet.
 //Der Beobachter überwacht den Authentifizierungszustand des Benutzers. Wenn sich dieser Zustand ändert, wird die übergebene Funktion ausgeführt.
 //sozusagen, wenn sich auth aendert, dann wird der user uebergeben und wenn er nicht angemeldet ist, wird er zum start geschickt
  useEffect( () => {
    auth.onAuthStateChanged(user => {
      if(!user){
        navigate("/");
      }
    })
  },[]);

  const navigate = useNavigate(); 

  const handleHome = () => {
    navigate("/");
  };

  const handleLogout = () => {
    signOut(auth).then(() => navigate("/")).catch((err) => alert(err.message));
  }

  return(
    
    <div className="w-screen h-screen bg-slate-100">
      <div className="flex justify-between">
        <button className=' bg-gray-300 rounded-md p-1 m-2 ml-8 shadow-md' onClick={handleHome} >Home</button>
        <button className=' bg-gray-300 rounded-md p-1 m-2 mr-8 shadow-md' onClick={handleLogout} >Log out</button>
      </div>
      <Form/>
    </div>  
    
  );
};


export default Todo;