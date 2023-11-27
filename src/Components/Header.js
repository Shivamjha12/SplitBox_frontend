import SearchButton from "./SearchButton";
import SignButton from "./SignButton";
import logo from "../Assets/logo.png";
import {useNavigate} from "react-router-dom";
import Cookies from 'js-cookie';
import React,{ useEffect } from "react";
import { Navbar,Nav, Container,Row, Col } from "react-bootstrap";
const Header = ({user}) => {


  const navigate = useNavigate();

    const production_url = 'http://127.0.0.1:8000';

  return (
    <div className="Header">
      <div className="Logo">
        <img src={logo} alt="Logo" />
        <h3>SplitBox</h3>
      </div>

      <div className="Second-part-nav-bar">
        <ul className="Elements">
        {user!=="notUser"?(
          <>
          <li><Nav.Link style={{"color":"black","text-decoration":"none"}} onClick={(e)=>{navigate('/home')}}>Home</Nav.Link></li>
          <li><Nav.Link style={{"color":"black","text-decoration":"none"}} onClick={(e)=>{navigate('/groups')}}>Create Group</Nav.Link></li>
          <div className="btn">
            <li>
              <SearchButton text={"Profile"} />
            </li>
            <li>
              <SignButton  text={"Logout"} />
            </li>
          </div>
          </>
          )
          :(
            <>
            <li>Home</li>
            <li>Create Group</li>
            <div className="btn">
              <li>
                <SearchButton text={"Login"} />
              </li>
              <li>
                <SignButton text={"SignUp"} />
              </li>
            </div>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
