import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div>
       <section class="container1" id="login">
<div class="login-container1">
    <div class="circle circle-one"></div>
    <div class="form-container">
        <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" class="illustration" />
        <h1 class="opacity">LOGIN</h1>
        <form>
            <input type="text" placeholder="USERNAME" />
            <input type="password" placeholder="PASSWORD" />
            <button class="opacity">SUBMIT</button>
        </form>
        <div class="register-forget opacity">
            <a href="">REGISTER</a>
            <a href="">FORGOT PASSWORD</a>
        </div>
    </div>
    <div class="circle circle-two"></div>
</div>
<div class="theme-btn-container"></div>
</section>
    </div>
  )
}

export default Login