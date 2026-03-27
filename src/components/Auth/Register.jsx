import React from "react";
import "./Auth.css";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitCall = (data) => {
    console.log(data);
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit(submitCall)}>
        <h2 className="auth-title">Create an Account</h2>

        <div className="input-group">
          <label htmlFor="name" className="input-label">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            className="input-text"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
          />
          {errors.name && <div className="error-div">{errors.name.message}</div>}
        </div>

        <div className="input-group">
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            id="email"
            type="text"
            className="input-text"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.name && <div className="error-div">{errors.email.message}</div>}
        </div>

        <div className="input-group">
          <label htmlFor="mobile" className="input-label">
            Mobile
          </label>
          <input id="mobile" type="text" className="input-text" {...register("mobile", {
            required: "Mobile number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Mobile number must be 11 digits"
            }
          })}/>
          {errors.name && <div className="error-div">{errors.mobile.message}</div>}
        </div>

        <div className="input-group">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input id="password" type="text" className="input-text" {...register("password", {
            required: "Password is required",
            maxLength: {
              value: 6,
              message: "Password must be at least 6 charaters",
            },
          })}/>
          {errors.name && <div className="error-div">{errors.password.message}</div>}
        </div>

        <button type="submit" className="btn">
          Register
        </button>
        <p className="togglr-Text">Already have an account? Login</p>
      </form>
    </div>
  );
}

export default Register;
