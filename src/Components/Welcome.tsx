import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate(); 
  const routeChange = () =>{ 
    navigate('/loginregister');
  }

  return (
  
    <div className="h-screen w-screen bg-slate-200 flex justify-center items-center min-w-[600px] min-h-[900px]">
      <div className=' bg-slate-300 flex flex-col border-none items-center justify-center w-3/4 h-2/4 rounded-xl shadow-xl '>
      <h1 className="text-5xl font-thin pt-24  ">Welcome to my Page</h1>
      <h2 className="pt-16 text-2xl">Here is a basic todo-list</h2>
      <div className='mt-4 mb-8'>
        <ArrowDownwardIcon/>
        <ArrowDownwardIcon/>
        <ArrowDownwardIcon/>
      </div>
      <button onClick={ routeChange } className='bg-slate-200 rounded-2xl p-2 border border-solid border-slate-400  hover:border-slate-100 transition duration-300 ease-in-out '>
        click me
      </button>
      </div>
      
    </div>
  )
}

export default Home