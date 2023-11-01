import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { uid } from "uid";
import { set, ref, onValue, remove } from "firebase/database";
import { auth, db } from "./Firebase.tsx"; 
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Form = () => {

const [todo, setTodo] = useState("");
const [todos, setTodos] = useState([]);
const navigate = useNavigate();

useEffect(() => {
  auth.onAuthStateChanged((user) => {
    if(user && auth.currentUser !== null){
      onValue(ref(db,`/${auth.currentUser.uid}`), snapshot => {
        setTodos([]);
        const data = snapshot.val();
        if(data!== null){
          setTodos(Object.values(data));
        }
      });
    }else if(!user){
      navigate("/");
    }
  });
},[]);



//add
const writeToDB = () => {
    const uidd = uid();
    if(auth.currentUser != null){
      set(ref(db, `/${auth.currentUser.uid}/${uidd}`), {
        todo: todo,
        uidd: uidd
      });
      setTodo("");
    }
};


//delete
const handleDelete = (uidd) => {
  if (auth.currentUser != null) {
    remove(ref(db, `/${auth.currentUser.uid}/${uidd}`));
  }
};

  return (
    <div className="h-screen w-screen bg-gray-500 p-16 flex flex-col ">
      <div className="bg-slate-100 max-w-[600px] w-full rounded-md shadow-2xl p-6 flex-grow-1 self-center">
        <h1 className="text-2xl text-center mb-4 text-gray-800">Todo List </h1>
        <div className='flex justify-between bg-gray-300 p-4 rounded-lg items-center'>
          <input className='w-full text-xl rounded-lg p-[10px] outline-none ' placeholder='task' type='text' value={todo} onChange={(e) => setTodo(e.target.value)}/>
          <button className='ml-4 rounded-lg text-grey-800' onClick={writeToDB}>
            <AddCircleOutlineIcon/>
          </button>
        </div>
        <div className='mt-8'>
        {todos.map((todo) => (
              <div className='text-2xl font-thin flex flex-row justify-between mb-8'>
                <h1>{todo.todo}</h1>
                <button onClick={() => handleDelete(todo.uidd)}> 
                <DeleteIcon/>
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  
    
  )
}

export default Form;