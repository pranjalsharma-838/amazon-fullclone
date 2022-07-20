import React, { useState } from "react";
import "./Login.css";
import { Link ,useHistory} from "react-router-dom";
import {auth} from './firebase';
function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState(null);

    const history=useHistory();
  
   const signIn=e=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then((auth)=>{
      history.push("/")
    })
    .catch((err)=>alert(err));
   
   }
   const signUp=e=>{
    e.preventDefault(); 
    auth
    .createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
     if(auth){
       history.push("/");
     }
    }).catch((err)=>alert("User alerady exist please login!!!"))
   }

  return (  
    <div className="login">
      <Link to="/">
        <img
          className="loginLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
        <div className="loginContainer">
            <form onSubmit={signIn}>
                <h5>Email</h5>
                <input  autoComplete="on" type="text" value={email} onChange={(e)=>{
                    setEmail(e.target.value);
                }}/>
                <h5>Password</h5>
                <input autoComplete="on" type="password" password={password} onChange={(e)=>{
                    setPassword(e.target.value);
                }}/>

                <button type="submit" className="login_signin_button">SignIn</button>
            </form>

        <p>By signing in to account you accept the terms and conditions of sale</p> 
        <button onClick={signUp}className="login_register_button">Create Your Amazon Account</button>      
        </div>
    </div>
  );
}

export default Login;
