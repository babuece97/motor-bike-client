import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import {auth}  from '../Firebase/firebase.init';
import { signInWithEmailAndPassword,GoogleAuthProvider,sendPasswordResetEmail,signInWithPopup } from "firebase/auth";
import  { useState } from "react";
import toast from "react-hot-toast";


const provider = new GoogleAuthProvider();

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const googleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // ...
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        console.error(error);
      });
  };

  const handleEmail = (event) => {
    const emailInput = event.target.value;

    if (/\S+@\S+\.\S+/.test(emailInput)) {
      setEmail({ value: emailInput, error: "" });
    } else {
      setEmail({ value: "", error: "Please Provide a valid Email" });
    }
  };

  const handlePassword = (event) => {
    const passwordInput = event.target.value;

    setPassword({ value: passwordInput, error: "" });
  };
    // Password reset
  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('email sent for reset pwd')
      })
  }

  const handleLogin = (event) => {
    event.preventDefault();

    if (email.value === "") {
      setEmail({ value: "", error: "Email is required" });
    }

    if (password.value === "") {
      setPassword({ value: "", error: "Password is required" });
    }

    if (email.value && password.value) {
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/");
        })
        .catch((error) => {
          const errorMessage = error.message;

          if (errorMessage.includes("wrong-password")) {
            toast.error("Wrong Password", { id: "error" });
          } else {
            toast.error(errorMessage, { id: "error" });
          }
        });
    }
  };

  return (
    <div className='auth-form-container '>
      <div className='auth-form'>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <div className='input-wrapper'>
              <input type='text' name='email' onBlur={handleEmail} id='email' />
            </div>
            {email.error && (
              <p className='error'>
                 {email.error}
              </p>
            )}
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <div className='input-wrapper'>
              <input
                type='password'
                onBlur={handlePassword}
                name='password'
                id='password'
              />
            </div>
            {password.error && (
              <p className='error'>
                 {password.error}
              </p>
            )}
          </div>
          
          <button onClick={handlePasswordReset} variant="link">Forget Password?</button>
          <button type='submit' className='auth-form-submit'>
            Login
          </button>
        </form>
        <p className='redirect'>
          No account here?{" "}
          <span onClick={() => navigate("/registration")}>Registration</span>
        </p>
        <div className='horizontal-divider'>
          <div className='line-left' />
          <p>or</p>
          <div className='line-right' />
        </div>
        <div className='input-wrapper'>
          <button className='google-auth' onClick={googleAuth}>
           
            <p> Continue with Google </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;