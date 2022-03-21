import './App.css';
import Main from './pages/Main'
import Navbar from './components/Navbar'
import Login from './pages/Login';
import User from "./components/User"
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
            // <Authenticate>
            <Main />
          //  </Authenticate>
          }></Route>
          <Route path="user" element={<User />} />
          <Route path='/Login' element={
            <Login />
          }></Route>
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
