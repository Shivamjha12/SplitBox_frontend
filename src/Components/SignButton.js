import React from 'react'
import {useNavigate} from "react-router-dom";
import Cookies from 'js-cookie';

function SignButton({text,production_url}) {
  const navigate = useNavigate();

  async function handleLogout(e){
    e.preventDefault();
    const response = await fetch(`${production_url}/api-user/logout`,{
      method: "POST",
      headers: {
           "Content-Type": "application/json"
      },
      credentials:'include',
      body: JSON.stringify("")
      });
      Cookies.remove('meraToken');
      navigate('login/');
      console.log(response);
      navigate(0);

  }
  

  return (
    <div>
        <button onClick={(e) =>{
                handleLogout(e);
                }} className='SignButton'>
            {text}
        </button>
    </div>
  )
}

export default SignButton;
