import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";
import toast from "react-hot-toast";
import "./Registration.css";

const provider = new GoogleAuthProvider();

const Registration = () => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [passwordConfirmation, setPasswordConfirmation] = useState({
    value: "",
    error: "",
  });

  const navigate = useNavigate();

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

    if (passwordInput.length < 7) {
      setPassword({ value: "", error: "Password too short" });
    } else if (!/(?=.*[A-Z])/.test(passwordInput)) {
      setPassword({
        value: "",
        error: "Password must contain a capital letter",
      });
    } else {
      setPassword({ value: passwordInput, error: "" });
    }
  };
  const handleConfirmPassword = (event) => {
    const confirmationInput = event.target.value;

    if (confirmationInput !== password.value) {
      setPasswordConfirmation({ value: "", error: "Password Mismatched" });
    } else {
      setPasswordConfirmation({ value: confirmationInput, error: "" });
    }
  };

  const handleSignup = (event) => {
    event.preventDefault();
    if (email.value === "") {
      setEmail({ value: "", error: "Email is required" });
    }
    if (password.value === "") {
      setPassword({ value: "", error: "Password is required" });
    }
    if (passwordConfirmation.value === "") {
      setPasswordConfirmation({
        value: "",
        error: "Password confirmation is required",
      });
    }
    if (email.value && password.value === passwordConfirmation.value) {
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          const user = userCredential.user;
          verifyEmail(true); // For Email varification
          toast.success("CONGRTS !!!Your account is created", { id: "created" });
          navigate("/");
        })
        .catch((error) => {
          const errorMessage = error.message;
          if (errorMessage.includes("already-in-use")) {
            toast.error("SORRY!!!!Email is  already in use", { id: "error" });
          } else {
            toast.error(errorMessage, { id: "error" });
          }
        });
    }
  };

  // For Email varification
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log('Email Verification Sent now');
      })
  }

  return (
    <div className='auth-form-container '>
      <div className='auth-form'>
        <h1>Signup/Registration</h1>
        <form onSubmit={handleSignup}>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <div className='input-wrapper'>
              <input
                onBlur={handleEmail}
                type='email'
                name='email'
                id='email'
              />
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
                onBlur={handlePassword}
                type='password'
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
          <div className='input-field'>
            <label htmlFor='confirm-password'>Confirm Password</label>
            <div className='input-wrapper'>
              <input
                onBlur={handleConfirmPassword}
                type='password'
                name='confirmPassword'
                id='confirm-password'
              />
            </div>
            {passwordConfirmation.error && (
              <p className='error'>
                 {passwordConfirmation.error}
              </p>
            )}
          </div>
          <button type='submit' className='auth-form-submit'>
            Sign Up
          </button>
        </form>
        <p className='redirect'>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
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

export default Registration;