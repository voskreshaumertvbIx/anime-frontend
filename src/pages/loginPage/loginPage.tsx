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
          <img src={logo} className=" object-cover " alt="logo" />
        </div>
        <form className={styles.loginContainer} onSubmit={() => {}}>
          <h1 className="text-3xl font-bold text-black mb-8">
            Login to your account
          </h1>
          <div className="mb-2">
          <label htmlFor="email" className="text-sm mb-2">
            Email
          </label>
          <input
            className="rounded-md border border-slate-500  px-4 py-2 w-full"
            type="email"
            placeholder="example@gmail.com"
            id="email"
            name="email"
            value={email}
            onChange={handleChangeValue}
          />
          </div>
          <div className={styles.passwordInput}>
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <input
            className="rounded-md border border-slate-500  px-4 py-2 w-full"
            type={showPassword ? "text" :  "password"}
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
          <div className="flex items-center mb-3 mt-1 ">
            <input
              className="h-4 w-4 mr-2"
              type="checkbox"
              id="remember"
              name="isRememberMe"
              checked={isRememberMe}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="remember" className="text-sm">
              Remember me
            </label>
            <div className="ml-auto">
              <Link to="#" className="text-sm text-blue-600">
                Forgot password
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="border bg-green-600 rounded-md hover:bg-green-400 h-12 text-white mb-8 w-full"
          >
            Login now
          </button>
          <p className="text-sm  text-center">
            Don't have an account?{" "}
            <Link to={ROUTES.register} className="text-sm text-blue-600">
              Create now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
