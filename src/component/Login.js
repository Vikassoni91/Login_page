import React, { useEffect, useState } from 'react';
import backgroundImage from '../styles/image1.png';
import petal from '../styles/petals 1.png'
import logo2 from '../styles/logo2.png'
import Ig from '../styles/Ig.png'
import fb from '../styles/fb.png'
import tg from '../styles/togle.png'
import intr from '../styles/intr.png'
import aesthesia from '../styles/aesthisia.com.png'
import In from '../styles/In.png'
import emoji from '../styles/emoji.png'
import eyeIcon from '../styles/eyeIcon.png'
import eyeSlashIcon from '../styles/eyeSlashIcon.png'


const Login = () => {
  const [seePass, setSeePass] = useState(false);

  useEffect(() => {
    //To Remove scrollbars when the component mounts
    document.body.style.overflow = 'hidden';

    //To Re-enable scrollbars when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const togglePasswordVisibility = () => {
    setSeePass(!seePass);
  };

  return (
    <div className="flex lg:flex-row">
      <div className="flex-1 bg-cover bg-center w-auto h-auto mx-2 my-8 relative login-container" style={{ backgroundImage: `url(${backgroundImage})`, borderRadius: '20px' }}>
        <div className="mx-6 my-8 brightness-200">
          <img className="h-7 w-auto" src={logo2} alt="" style={{ filter: 'brightness(150%)' }} />
        </div>
        <div className="w-full h-full flex">
          <div className="absolute left-6 top-1/2 transform translate-y-1/5">
            <div className="text-white font-semibold text-5xl leading-9 flex items-center tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
              100% Uptime <img className="mx-1 w-12" src={emoji} alt="" />
            </div>
            <p className="text-gray-400 text-4xl flex my-3 lspace">Zero Infrastructure</p>
            <p className="text-gray-400 text-4xl flex mt- lspace">Management</p>

            {/* <div className=''>
              <img className='h-auto w-11 mx-1' style={{ marginTop: '49px' }} src={tg} alt="" />
            </div> */}
            <div className="flex">
            <div className='my-10'>
              <img className='h-auto w-11' src={tg} alt="" />
            </div>
            </div>
          </div>
        </div>
         <div className=''>
            <div className="flex mx-2 absolute bottom-0 left-0">
                <div className="relative bottom-7 left-4 flex items-start">
                    <img className="h-4 w-auto" src={intr} alt="" />
                    <a href="/" className="block">
                    <img className="h-3 mx-1 w-auto" src={aesthesia} alt="" />
                    </a>
                </div>
            </div>

            <div className="flex absolute bottom-3 right-0">
            <div className="relative bottom-4 right-4 flex items-end">
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="block">
                <img className="h-5 mx-2 w-auto" src={In} alt="" />
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="block">
                <img className="h-5 mx-2 w-auto" src={fb} alt="" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="block">
                <img className="h-5 mx-2 w-auto" src={Ig} alt="" />
                </a>
            </div>
            </div>

         </div>
      </div>

      <div className="flex-1 bg-white flex items-center justify-center -mt-2 -mx-3">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm" >
            <img className="mx-auto h-auto w-20 my-1" src={petal} alt="Your Company" />
            <h2 className="text-center font-semibold leading-9 text-black tracking-[.024em]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '42px' }}>Welcome<span style={{ color: '#08A593' }}> Back!</span></h2>
            {/* <div>
            </div> */}
            <h6 className="text-center mt-4 leading- text-gray-500">Glad to see you, Again!</h6>
          </div>

          <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6 -mx-5 " style={{ width: '432px', left: '780px', top: '290px' }} action="#" method="POST">
              <div>
                {/* <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label> */}
                <div className="mt-2">
                  <input id="email" name="email" type="email" autocomplete="email" placeholder='Enter your email' required className="block w-full border-1 rounded-xl px-3 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-300 placeholder:text-lg text-lg" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  {/* <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label> */}
                </div>
                <div className="mt-2 relative">
                  <input id="password" name="password" type={seePass ? 'text' : 'password'} autoComplete="current-password" placeholder="Enter your password" required className="block w-full border-1 rounded-xl px-3 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-300 placeholder:text-lg text-lg" />
                  <div
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {seePass ? (
                      <img src={eyeSlashIcon} className='w-auto h-6 opacity-40' alt="Hide Password" />
                    ) : (
                      <img src={eyeIcon} alt="Show Password" className="h-auto w-6" />
                    )}
                  </div>
                </div>
                <div className="block text-sm my-1 flex justify-end">
                  <a href="/" className="font-semibold text-gray-400 hover:text-gray-500 curson-pointer">Forgot password?</a>
                </div>
              </div>

              <div>
                <button type="submit" className="flex w-full justify-center rounded-xl bg-black px-3 py-4 text-2xl font-semibold leading-8 text-white hover:bg-gray-800 mt-1" style={{ marginTop: '40px', boxShadow: '0 25px 50px -2px rgb(0 0 0 / 0.65)' }}>Log In</button>
              </div>
            </form>

            <p className="mt-16 text-center text-lg text-gray-500">
                Don't have an account yet?
                <a href="/" className="mx-2 font-semibold signUp-link">
                    SignUp
                </a>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
