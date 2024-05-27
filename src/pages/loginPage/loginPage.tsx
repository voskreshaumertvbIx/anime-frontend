import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../../img/forloginpage.jpg";
import styles from "./styles.module.css";
import { ROUTES } from "../../routes/routes";
import showPass from "./../../img/icons/show.png";
import hidePassword from "./../../img/icons/hide.png";
import { useLoginUserMutation } from "../../redux/services/userSevices";
import { authValidate } from "../../services/validation/validationAuth";
import { toast } from "react-toastify";

interface LoginPageProps {
  email: string;
  password: string;
  isRememberMe: boolean;
}

export const LoginPage: React.FC<any> = () => {
  const initialState: LoginPageProps = {
    email: "",
    password: "",
    isRememberMe: false,
  };
  const [formValue, setFormValue] = useState(initialState);
  const { email, password, isRememberMe } = formValue;

  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const [
    loginUser,
    { isLoading: userLoading, data: userData, error: userError },
  ] = useLoginUserMutation();

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.checked });
  };

  const toggleShowPassword = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (authValidate(email, password, true))
      try {
        const response: { data: any } | { error: any } = await loginUser({
          email,
          password,
        });
        if ("error" in response) {
          toast.error(
            response.error.data.message ||
            "Failed to login. Please try again.")
        } else {
          toast.success("Login successful!");
          localStorage.setItem('access_token', response.data.access_token);
          localStorage.setItem('refresh_token', response.data.refresh_token);
        }
      } catch (error) {
        toast.error("Failed to login. Please try again.");
      }
  };

  return (
    <div className={styles.fullscreen}>
      <div className={styles.formContainer}>
        <div className={styles.imgContainer}>
          <img src="./images/authForms/forlogin.jpg" className="object-cover" alt="logo" />
        </div>
        <form className={styles.loginContainer} onSubmit={handleSubmit}>
          <h1 className={styles.loginName}>Login to your account</h1>
          <div className={styles.email_container}>
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

          <div className={styles.passwordInput}>
            <label htmlFor="password" className={styles.labelPassword}>
              Password
            </label>
            <input
              className={styles.inputText}
              type={isPasswordVisible ? "text" : "password"}
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
            >
              <img
                src={isPasswordVisible ? hidePassword : showPass}
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
            <label htmlFor="remember" className={styles.labelCheckbox}>
              Remember me
            </label>
            <div className="">
              <Link to="#" className={styles.forgotPassword}>
                Forgot password
              </Link>
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>
            Login now
          </button>
          <p className={styles.footerP}>
            Don't have an account?{" "}
            <Link to={ROUTES.register} className={styles.loginText}>
              Create now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};


