import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import styles from "./Login.module.css";
import axios from 'axios';
import logo from "../../../assets/svgs/logo.svg";

const Login = () => {
  const navigate=useNavigate()
  // Validation schema with Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Handle form submission
  const handleSubmit =async (values) => {
    console.log("Login info:", values);
    // Call your API or handle login logic here
    try{ const data=await axios.post('http://localhost:3000/auth/login',values).then(res=>{
      console.log("response",res)
      localStorage.setItem('token',res.data.token);
      navigate("/")
    })
 
}catch(error){ 
console.log("response error",error)
}
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <h2 className={styles.logo}>
              <img src={logo} alt="" />
            </h2>

            {/* Email Field */}
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className={styles.input}
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </div>

            {/* Password Field */}
            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>

              <Field
                type="password"
                name="password"
                id="password"
                className={styles.input}
                placeholder="Enter your password"
              />
              <div className={styles.forgotlink}>
                <Link to="/forgot-password" className={styles.link}>
                  Forgot Password?
                </Link>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className={styles.error}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={styles.button}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
            {/* Forgot Password and Sign Up Links */}
            <div className={styles.links}>
              <p>Don't have account?</p>
              <Link to="/signup" className={styles.link}>
                Sign Up
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
