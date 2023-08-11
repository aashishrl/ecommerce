import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <>
            <div className="login-container my-5">
                <div className="logo mb-4">
                    <Link to='/'>
                        <img src="https://thulo.com/images/logos/163/logo_l6qu-tl_1m2c-26_1tuz-ca.png" width="150" alt="alt text" />
                    </Link>
                </div>
                <div className="card">
                    <h5>Log into thulo.com</h5>
                    <form>
                        <label className='l-text1' htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="Enter your username" />
                        <label className='l-text1' htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" />
                        <button type="submit" className='m-0'>Login</button>
                    </form>
                    <div className="d-flex justify-content-between l-re">
                        <div className='d-flex align-items-center'><input type="checkbox" className='me-1' /><span>Remember Me</span></div>
                        <p className='f-pd m-0'>Forgot Password ?</p>
                    </div>
                    <div className="switch">Don't have an account? <a href="#">Register here</a></div>
                </div>               
            </div>

        </>
    )
}

export default Login

