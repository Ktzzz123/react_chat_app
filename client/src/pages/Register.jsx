import React from 'react'
import styled from "styled-components";
import Logo from "../assets/favicon.ico"


function Register() {
  const handleSubmit=(e)=>{
      e.preventDefault();
      alert("submitted")
  }
  const handleChange=(e)=>{

  }


  return (
    <>
      <FormContainer>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div className='brand'>
            <img src={Logo} alt='brand'/>
            <h1>ChatApp</h1>
          </div>
          <input type="text" placeholder="Username" name = "username"
            onChange={(e)=>handleChange(e)}/>
            <input type="email" placeholder="Email" name = "email"
            onChange={(e)=>handleChange(e)}/>
            <input type="password" placeholder="Password" name = "password"
            onChange={(e)=>handleChange(e)}/>
            <input type="password" placeholder="Confirm password" name = "confirmPassword"
            onChange={(e)=>handleChange(e)}/>
          <button type='submit'> Create User</button>
          <span>Already have an account? 
            <button onClick={()=>window.location.href='/login'} >Login</button>
            </span>
        </form>
      </FormContainer>

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
  background-color: #fff;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
`


export default Register