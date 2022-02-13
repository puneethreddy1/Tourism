import React from "react";
export default function Login() {
    return (
        <div className="login-form-container">

            <i className="fas fa-times" id="form-close"></i>

            <form action="">
                <h3>login</h3>
                <input type="email" className="box" placeholder="enter your email" />
                <input type="password" className="box" placeholder="enter your password" />
                <input type="submit" value="login now" className="btn" />
                <input type="checkbox" id="remember" />
                <label for="remember">remember me</label>
                <p>forget password? <a href="#">click here</a></p>
                <p>don't have and account? <a href="#">register now</a></p>
            </form>

        </div>
    )
}