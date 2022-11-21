import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { SignUp } from './pages/SignUp/SignUp';


export const Router = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />}/>
                <Route path='/signup' element={<SignUp />}/> 
            </Routes>
        </BrowserRouter>      
    </>
  )
}