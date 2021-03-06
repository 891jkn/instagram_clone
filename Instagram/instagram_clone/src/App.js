import './App.css';
import Main from './pages/Main'
import Navbar from './components/Navbar'
import Login from './pages/Login';
import User from "./components/User"
import Test from './pages/test';
import { Navigate } from 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Register';
function Authenticate(props) {
  let isLogin = localStorage.getItem('instagram_user_id') || null
  if (isLogin !== null) {
    return props.children
  }
  return <Navigate to={'/Login'} />
}

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={
            <Authenticate>
                <Main/>
              </Authenticate>
          }></Route>
          <Route path="user">
            <Route path=':userId' element={<User/>}></Route>
          </Route>
          <Route path='/Login' element={
            <Login />
          }></Route>
          <Route path='/test' element={<Test/>}></Route>
          <Route path='/Register' element={
            <Register />
          }></Route>
          <Route path='*' element={<Navigate to={'/'} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
