import './App.css';
import SearchPage from './Pages/SearchPage';
import Header from './Components/Header';
import ProductLandingPage from './Pages/ProductLandingPage';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import UserPage from './Pages/UserPage';
import SignupPage from './Pages/SignupPage';
import Login from './Pages/login_page';
import React,{ useState,useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import { Route, Routes,Navigate,Redirect  } from "react-router-dom";
import Cookies from 'js-cookie';
import loader from "./Assets/loader.gif";
function App() {

  const production_url = 'http://127.0.0.1:8000'
  const [user,setUser] = useState(null);
  const navigate = useNavigate();
  const [meraToken,setMeratoken] = useState('None');

  useEffect(()=>{
    (
        async () => {
          try {
              // Cookies.set('name', 'Shivam Jha', { expires: 7 });
              const token = Cookies.get('meraToken');
              console.log(token);
              setMeratoken(token);
              // const name = Cookies.get('name');
              // console.log(name,"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX----------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
              // Cookies.remove('name');
              // const fname = Cookies.get('name');
              // console.log(name,"second","XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX----------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
              const response = await fetch(`${production_url}/api-user/user/${meraToken}`,{
              mode:'no-cors',
              headers:{'Content-Type':'application/json'},
              credentials:'include',
              // mode: 'cors'
              })
              const content = await response.json();
              console.log(content,"here is the content-----------------------------------------------")
              console.log(content.detail);
              if(content.email){
                await setUser(content.email);
              }
              else{
                setUser('notUser');
              }
              console.log(user, "here we checking the data is set in user or not");
            
        } catch (error) {
          console.log(error);
        }
      }
      
    )();
},[user,meraToken]);

  if(user==null && meraToken==='None'){
    return <div className="loader-container">
      <img src={loader} alt="Loading" className="loader-image" />
    </div>
  }

  return (
    <div className="App">
      <Header/>
      <Routes>
            <Route path="/" element={user==='notUser'?(<Login/>):(<Home/>)}/> 
      </Routes>
      {/* <Home/>
      <SearchPage/>
      <ProductLandingPage/> 
      <UserPage/>  */}

      {/* <SignIn/> */}
      

    </div>
  );
}

export default App;
