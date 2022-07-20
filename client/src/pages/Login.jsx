import React from 'react'
import styled from "styled-components";
import {ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Logo from "../assets/favicon.ico"
import {Link} from "react-router-dom"


function Login() {
  const handleSubmit=()=>{

  }
  const handleChange=()=>{
    
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
            <button onClick={()=>window.location.href='/login'} >Forgot password</button>
            </span>
            <span>Don't have account?
            <button onClick={<Link to={'/register'}></Link>} >register</button>
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