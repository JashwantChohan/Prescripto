import Login from './pages/login'
import './index.css'
import { ToastContainer } from 'react-toastify';
import { AdminContext } from './context/AdminContext';
import { useContext } from 'react';
import Navbar from './components/Navbar';


const App = () => {
  const { aToken } = useContext(AdminContext)
  return aToken ? (
    <div classname='bg-[#F8F9FD]'>
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  )
}

export default App
