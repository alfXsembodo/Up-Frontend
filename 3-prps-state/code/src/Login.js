import React from 'react';
import './login.css'

function Login() {
    return (
        <>
            <h2>Form Login</h2>
            <form>
                <h1>Tugas Pertemuan Ketiga</h1>

                <div className="input-group">
                    <label>Username</label>
                    <input type="text" placeholder="Masukkan username..." />
                </div>

                <div className="input-group">
                    <label>Password</label>
                    <input type="text" placeholder="Masukkan password..." />
                </div>

                <button className="login">Login</button>

                <div className="remember-me">
                    <input type="checkbox"></input>
                    <label>Remember Me</label>
                </div>

                <button className="cancel">Cancel</button>

            </form>
        </>
    )
}

export default Login;