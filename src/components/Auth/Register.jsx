import React from "react"
import "./Auth.css";

function Register() {

    return(
        <div className="auth-container">
        <form className="auth-form">
            <h2 className="auth-title">Create an Account</h2>
            <div className="input-group">
                <label htmlFor="name" className="input-label">Full Name</label>
                <input id="name" type="text" className="input-text" />
            </div>
        </form>
    </div>
    )
}

export default Register;