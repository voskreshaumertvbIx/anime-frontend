import React, { useState } from "react";
import "./../../output.css";
import logo from "./../../img/forregister.jpg";
import showPass from "./../../img/icons/show.png";
import hidePassword from "./../../img/icons/hide.png";
import styles from "./styles.module.css";
import { ROUTES } from "../../routes/routes";
import { Link } from "react-router-dom";
import { useRegisterUserMutation } from "../../redux/services/userSevices";
import { validateEmail, validatePassword } from "../validation/validationAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RegisterPage: React.FC<any> = () => {
  const initialState = {
    email: "",
    password: "",
    confirmPassword: "",
    isRememberMe: false,
    
  };
  const [formValue, setFormValue] = useState(initialState);
  const { email, password, isRememberMe, confirmPassword } = formValue;
  const [showPassword, setShowPassword] = useState(false);

  const [registerUser, { isLoading: userLoading, data: userData }] =
    useRegisterUserMutation();

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.checked });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: any = {};
    let errorOccurred = false;

    switch (true) {
      case !email:
        toast.error("Please enter your email.");
        errorOccurred = true;
        break;

      case !validateEmail(email):
        toast.error("Email contains an error example: example@gmail.com");
        errorOccurred = true;
        break;

      case !password || !confirmPassword:
        toast.error("Please fill in both password fields.");
        errorOccurred = true;
        break;

      case password !== confirmPassword:
        toast.error("Password mismatch");
        errorOccurred = true;
        break;

      case !validatePassword(password):
        toast.error(
          "The password must contain at least one number, one lowercase letter and one uppercase letter, and be at least 8 characters long."
        );
        errorOccurred = true;
        break;

      default:
        break;
    }

    if (!errorOccurred) {
      try {
        const response: { data: any } | { error: any } = await registerUser({email, password  });
       
        if ("error" in response) {
          if (response.error.data && response.error.data.message) {
            toast.error(response.error.data.message);
          } else {
            toast.error("Failed to register. Please try again.");
          }
        } else {
          toast.success("Registration successful!");
        }
      } catch (error) {
        toast.error("Failed to register. Please try again.");
      }
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.fullscreen}>
      <div className={styles.formContainer}>
        <div className={styles.imgContainer}>
          <img src={logo} style={{ objectFit: "cover" }} alt="logo" />
        </div>
        <form className={styles.loginContainer} onSubmit={handleSubmit}>
          <h1 className={styles.loginName}>Register your account</h1>
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

          <label htmlFor="password" className={styles.labelPassword}>
            Password
          </label>
          <div className={styles.passwordInput}>
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
              <img
                src={showPassword ? showPass : hidePassword}
                alt="Button Icon"
              />
            </button>
          </div>
          <label htmlFor="confirmPassword" className="text-sm">
            Confirm password
          </label>
          <div className={styles.passwordInput}>
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
              className={styles.showPasswordButton2}
              onClick={toggleShowPassword}
              aria-label="Toggle Password Visibility"
            >
              <img
                src={showPassword ? showPass : hidePassword}
                alt="Button Icon"
              />
            </button>
          </div>
          <div className={styles.rememberMePos}>
            <input
              className={styles.checkboxSize}
              type="checkbox"
              id="remember"
              name="isRememberMe"
              checked={isRememberMe}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="remember" className={styles.rememberText}>
              Remember me
            </label>
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
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};
