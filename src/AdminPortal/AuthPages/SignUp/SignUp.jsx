import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import styles from './SignUp.module.css';

const SignUp = () => {
  // Validation schema
  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(3, 'Full Name must be at least 3 characters')
      .required('Full Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting }) => {
    try{
      const userValues={
        ...values,
        name:values.fullName,
        repassword:values.confirmPassword
            }
            const data=await axios.post('http://localhost:3000/auth/signup',userValues).then(res=>{
              console.log("responsedata",data)
            })
            
            console.log("responsedata",data)
            setSubmitting(false);
    }catch(error){
      console.log("response error",error)
    }
  

    // Simulate an API call (replace with real signup logic)
    // setTimeout(() => {
    //   alert('Sign Up successful!');
    // }, 1000);
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ fullName: '', email: '', password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <h2 className={styles.title}>Sign Up</h2>

            {/* Full Name Field */}
            <div className={styles.inputGroup}>
              <label htmlFor="fullName" className={styles.label}>Full Name</label>
              <Field
                type="text"
                name="fullName"
                id="fullName"
                className={styles.input}
                placeholder="Enter your full name"
              />
              <ErrorMessage name="fullName" component="div" className={styles.error} />
            </div>

            {/* Email Field */}
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <Field
                type="email"
                name="email"
                id="email"
                className={styles.input}
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component="div" className={styles.error} />
            </div>

            {/* Password Field */}
            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <Field
                type="password"
                name="password"
                id="password"
                className={styles.input}
                placeholder="Enter your password"
              />
              <ErrorMessage name="password" component="div" className={styles.error} />
            </div>

            {/* Confirm Password Field */}
            <div className={styles.inputGroup}>
              <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
              <Field
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className={styles.input}
                placeholder="Confirm your password"
              />
              <ErrorMessage name="confirmPassword" component="div" className={styles.error} />
            </div>

            {/* Submit Button */}
            <button type="submit" className={styles.button} disabled={isSubmitting}>
              {isSubmitting ? 'Signing Up...' : 'Sign Up'}
            </button>

             {/* Already have an account? */}
             <div className={styles.loginRedirect}>
              <span>Already have an account? </span>
              <Link to="/login" className={styles.loginLink}>Login</Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
