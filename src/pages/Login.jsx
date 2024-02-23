import React from 'react'
import Header from '../components/Header/Header'
import LoginForm from '../components/Login/LoginForm'
import axios from 'axios'
const onNaverLogin = () => {
  // axios({
  //   url: "http://localhost:8888/oauth2/authorization/naver",
  //   method: 'POST'
  // })

  window.location.href = "http://localhost:8888/oauth2/authorization/naver"
}

const Login = () => {
  return (
    <>
        <Header />
        <div className="container">
            <LoginForm />
            <button onClick={onNaverLogin}>naver login</button>
        </div>
    </>
  )
}

export default Login