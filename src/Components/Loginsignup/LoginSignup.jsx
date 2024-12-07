import React from 'react';
import "./Login_signup.css";
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { useState } from 'react';

export const LoginSignup = () => { // Make sure the component is exported


    const[action,setAction]=useState("Log In");
    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Log In"?<div></div>:<div className="input">
                    <img src={user_icon} alt="User Icon" />
                    <input type="text"  placeholder="Username" />
                </div>}
                
                <div className="input">
                    <img src={email_icon} alt="Email Icon" />
                    <input type="email" name="email" placeholder="Email" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="Password Icon" />
                    <input type="password" name="password" placeholder="Password" />
                </div>
                {action==="Sign Up"?<div></div>: <div className="forgot-password">lost password<span>Click Here!</span></div>}
                <div className="submit-container">
                    <button className={action==="Log In"?"submit grey":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</button>
                    <button className={action==="Sign Up"?"submit grey":"submit"} onClick={()=>{setAction("Log In")}}>Log In</button>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;