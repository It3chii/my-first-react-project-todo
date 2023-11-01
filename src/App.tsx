import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Welcome from "./Components/Welcome";
import LoginRegister from "./Components/LoginRegister";
import Todo from "./Components/Todo";
import NoPage from "./Components/NoPage";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";


const App = () =>{
//Home kommt irgendwann xD
  return(
    <Router>
      <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home/>} /> 
          <Route path="/loginregister" element={<LoginRegister />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/todo" element={<Todo />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>

  
  )
}

export default App
