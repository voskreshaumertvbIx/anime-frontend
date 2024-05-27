import React, { useState } from 'react'
import { toast } from "react-toastify";

import { useRegisterUserMutation } from "../../redux/services/userSevices";
import { authValidate } from "../../services/validation/validationAuth";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import styles from "./styles.module.css";
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

const RegisterForm = () => {
  const InitialState = {
    email: "",
    password: "",
    confirmPassword: ""
  };

  const [formValue, setFormValue] = useState(InitialState);
  const { email, password, confirmPassword } = formValue;
  const [showPassword, setShowPassword] = useState(false);

  const [registerUser] = useRegisterUserMutation();

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (authValidate(email, password, false, confirmPassword))
      try {
        const response: { data: any } | { error: any } = await registerUser({ email, password });

        if ("error" in response) {
          toast.error(
            response.error.data.message ||
            "Failed to register. Please try again.")
        } else {
          toast.success("Registration successful!");
        }
      } catch (error) {
        toast.error("Failed to register. Please try again.");
      }
  };

  return (
    <form
      className={styles.registerForm}
      onSubmit={handleSubmit}
      noValidate={true}
    >
      <div className={styles.imageContainer}>
        <img
          className={styles.backgroundImage}
          src="./images/authForms/forregister.jpg"
          alt="registerBackground"
        />
      </div>
      <div className={styles.inputsContainer}>
        <h1 className={styles.registerTitle}>Register your account</h1>
        <div className={styles.inputContainer}>
          <label htmlFor="email" className={styles.emailLabel}>
            Email
          </label>
          <input
            className={styles.inputText}
            type="email"
            placeholder="example@gmail.com"
            id="email"
            name="email"
            value={email}
            onChange={handleChangeValue}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password" className={styles.labelPassword}>
            Password
          </label>
          <input
            className={styles.inputText}
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            id="password"
            name="password"
            value={password}
            onChange={handleChangeValue}
          />
          <button
            type="button"
            className={styles.showPasswordButton}
            onClick={toggleShowPassword}
            aria-label="Toggle Password Visibility"
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="confirmPassword" className="text-sm">
            Confirm password
          </label>
          <input
            className={styles.inputText}
            type={showPassword ? "text" : "password"}
            placeholder="Confirm password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChangeValue}
          />
          <button
            type="button"
            className={styles.showPasswordButton}
            onClick={toggleShowPassword}
            aria-label="Toggle Password Visibility"
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        </div>
        <button type="submit" className={styles.submitButton}>
          Register now
        </button>
        <p className={styles.footerP}>
          Already have an account?{" "}
          <Link to={ROUTES.login} className={styles.loginText}>
            Login
          </Link>
        </p>
      </div>
    </form>
  )
}

export default RegisterForm