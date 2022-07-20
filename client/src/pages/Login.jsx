import React, { useState } from 'react'
import styled from "styled-components";
import {ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Logo from "../assets/favicon.ico"
import {Link} from "react-router-dom"
import axios from 'axios';
import { loginRoute } from '../utils/APIRoutes';


function Login() {
  const [values, setValues] = useState({
    username:'',
    password:'',
  });


  const handleSubmit= async(e)=>{
    e.preventDefault();
    handleValidation();
    if(handleValidation()){
      const {username,password} = values;
      const {data}=await axios.post(loginRoute,{
        username,password
      })
    }
    
  }
  const handleChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }

  const handleValidation = ()=>{
    const {password,username} = values;
     if(username.length<8){
      toast.error("Username must have more or equal than 8 characters ");
      return false;
    } else if(password.length<8){
      toast.error("Password must have more or equal than 8 characters ");
      return false;
    }
    return true;
  }

  return (
    <>
    <FormContainer>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div className='brand'>
            <img src={Logo} alt='brand'/>
            <h1>Chat App</h1>
          </div>
          <input type="text" placeholder="Username" name = "username"
            onChange={(e)=>handleChange(e)}/>
            <input type="password" placeholder="Password" name = "password"
            onChange={(e)=>handleChange(e)}/>
          <button type='submit'> LOGIN</button>
        
            <span>Forgot password?
            <Link to={'/register'}> Forgot password</Link>
            </span>
            <span>Don't have account?
            <Link to={'/register'}> register</Link>
            </span>
        </form>
      </FormContainer>
      <ToastContainer/> 
    </>
  )
}



const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: white;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #4A6658;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid white;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid blue;
      outline: none;
    }
  }
  button {
    color: black;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    &:hover {
      background-color: #239F61;
    }
    &:placeholder {
      color: red;
      opacity: 1;
    }
  }
  span {
    color: black;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;

export default Login