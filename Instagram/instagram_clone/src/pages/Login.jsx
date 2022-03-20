import React from 'react'
import loginsl from '../images/loginSlider.png'
import loginsl2 from '../images/loginSlider2.png'
import loginsl3 from '../images/loginSlider3.png'
import loginsl4 from '../images/loginSlider4.png'
import logo from '../images/loginLogo.webp'
import { LoginAPI } from '../API/AccountAPI'
import {useNavigate} from 'react-router-dom'
import {useEffect,useState} from 'react'
import '../css/login.css'
import Alert from '../components/Alert'
function ValidForm ( props ){
  let emailRex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(emailRex.test(props.email) && props.password.length >= 8) return true
  return false;
}
async function handleLogin(self,props){
  self.preventDefault();
  if(ValidForm(props)){
    return await LoginAPI(props);
  }else{
    alert('Incorrect Email Format  or password less than 8 character!')
  }
}
function Login() {
  
  const [sliderBg,setSliderBg] = useState(loginsl)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()
  let active = 1;
  let old = active
  useEffect(()=>{
    let isLogin = localStorage.getItem('instagram_user_id') || null
    if(isLogin!==null){
      navigate('/')
    }
    const interval = setInterval(() => {
      do{
        active = Math.floor(Math.random() * 4);
      }while(active == old);
      old = active;
      if(active > 4){
        active = 1
      }
      if(active == 1){
        setSliderBg(loginsl)
      }else if(active == 2){
        setSliderBg(loginsl2)
      }else if(active == 3){
        setSliderBg(loginsl3)
      }else{
        setSliderBg(loginsl4)
      }
    }, 5000);
    return ()=> clearInterval(interval)
  },[])
  return (
      <>

        <div className='w-100 h-fit flex bg-main justify-center items-center'>
          <div className='login-box  w-full md:w-full xl:w-2/3 px-0 sm:px-14 flex my-0 h-fit justify-center'>
            <div className='w-1/2 hidden md:block lg:block'>
              <div className='left-tab w-100 h-full'>
                  <div className='slider-img'>
                    <img src={sliderBg} className='w-fit h-full'/>
                  </div>
              </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/2 px-10 h-100 flex flex-col md:px-0 lg:px-4 xl:px-6 2xl:px-14 md:justify-around lg:justify-center space-y-3 items-center'>
              <div className='w-full border bg-white px-3 py-2 md:px-10 lg:h-fit sm:px-14 sm:py-10 lg:px-10 pt-2.5'>
                <div className='w-full h-fit space-y-3 pb-2'>
                  <img src={logo} className='w-44 mt-0 mb-10 mx-auto'/>
                  <div className='h-fit'>
                    <form className='space-y-3 2xl:space-y-6 ' onSubmit={async (e)=>{
                      let props = {
                        email:email,
                        password:password
                      }
                      let result = await handleLogin(e,props)
                      console.log(result)
                      if(result.login){
                        window.localStorage.setItem('instagram_user_id',result.data)
                        navigate('/')
                      }else{
                        alert(result.err)
                        
                      }
                    }}>
                        <input type={'email'} className='text-xs px-2 w-full h-9 bg-main  border' placeholder='E-mail' onChange={(e)=>{setEmail(e.target.value)}}/>
                        <br></br>
                        <input type={'password'} className='text-xs px-2 w-full h-9 bg-main border  border' placeholder='Password ' onChange={(e)=>{setPassword(e.target.value)}}/>
                        <button className='text-white font-mono bg-sky-300 rounded w-full py-1'>Log in</button>
                        <hr></hr>
                        <h1 className='text-sm text-gray-400 font-medium text-center m-0'>OR</h1>
                         <hr></hr>
                        {/* facebook login */}
                        <div className='pt-3'>
                          <h5 className='pb-0 mb-0 text-sm font-medium text-sky-700 text-center'>
                            <i className="fa-brands fa-facebook-square text-sky-700 px-1"></i>
                              Login With Facebook
                          </h5>
                        </div>
                        {/* forgot password */}
                        <div className='pt-2'>
                          <h5 className='text-xs font-medium text-sky-700 text-center'>
                             <a href="#">forgot password ?</a>
                          </h5>
                        </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className='w-full border bg-white h-fit py-2 sm:py-4 flex items-center justify-center'>
                <h5 className='text-sm font-semibold text-center'>Don't have an account ? <a href='/Register' className='text-sky-500 text-sm font-medium'>Sign up</a></h5>
              </div>
            </div>
          </div>
        </div>

      </>
  )
}

export default Login