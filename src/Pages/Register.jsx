import React from 'react'

function Register() {
    return (
        <section className='register-page'>
            <div className="container">               
                <div id="login-box">
                    <div className="left">
                        <h1>Sign up</h1>
                        <input className='s-input1' type="text" name="username" placeholder="Username" />
                        <input className='s-input2' type="text" name="email" placeholder="E-mail" />
                        <input className='s-input3' type="password" name="password" placeholder="Password" />
                        <input className='s-input4' type="password" name="password2" placeholder="Retype password" />
                        <input className='s-input5' type="submit" name="signup_submit" defaultValue="Sign me up" />
                    </div>
                    <div className="right">
                        <span className="loginwith">Sign in with<br />social network</span>
                        <button className="social-signin facebook">
                            <img src="https://e7.pngegg.com/pngimages/991/568/png-clipart-facebook-logo-computer-icons-facebook-logo-facebook-thumbnail.png" className='me-1' width="26" alt="" />
                            Sign Up with facebook</button>
                        <button className="social-signin google">
                            <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" className='me-1' width="28" alt="" />
                            Sign Up with Google</button>
                    </div>
                    <div className="or">OR</div>
                </div>
            </div>            
        </section>
    )
}

export default Register
