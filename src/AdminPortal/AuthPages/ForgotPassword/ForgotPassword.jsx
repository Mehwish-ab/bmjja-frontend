import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ForgotPassword.module.css";

const ForgotPassword = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting }) => {
    setError(""); // Reset any previous errors
    try {
      // Simulate API call for password reset (replace with real API call)
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Mock API delay
      setSubmitted(true);
    } catch (err) {
      setError("Failed to send reset email. Please try again.");
    }
    setSubmitting(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Forgot Password</h2>
        {submitted ? (
          <div className={styles.successMessage}>
            <p>
              A reset link has been sent to your email if it's associated with
              an account.
            </p>
          </div>
        ) : (
          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className={styles.form}>
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

                {error && <div className={styles.errorMessage}>{error}</div>}

                <button
                  type="submit"
                  className={styles.button}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Reset Link"}
                </button>
              </Form>
            )}
          </Formik>
        )}

        <div className={styles.backToLogin}>
          <a href="/login" className={styles.link}>
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
