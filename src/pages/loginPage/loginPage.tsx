import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import logo from "./../../img/forloginpage.jpg";
import styles from "./styles.module.css";
import { ROUTES } from "../../routes/routes";
import showPass from "./../../img/icons/show.png";
import hidePassword from './../../img/icons/hide.png'

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
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.checked });
  };
  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.fullscreen}>
  <div className={styles.formContainer}>
    <div className={styles.imgContainer}>
      <img src={logo} className="object-cover" alt="logo" />
    </div>
    <form className={styles.loginContainer} onSubmit={() => {}}>
      <h1 className={styles.loginName}>Login to your account</h1>
      <div className={styles.email_container}>
        <label htmlFor="email" className={styles.emailLabel}>Email</label>
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
        <label htmlFor="password" className={styles.labelPassword}>Password</label>
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
        >
          <img src={showPassword ? showPass : hidePassword} alt="Button Icon" />
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
        <label htmlFor="remember" className={styles.labelCheckbox}>Remember me</label>
        <div className="">
          <Link to="#" className={styles.forgotPassword}>Forgot password</Link>
        </div>
      </div>
      <button
        type="submit"
        className={styles.submitButton}
      >
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
