import React, { useState } from "react";
import "./../../output.css";
import logo from "./forregister.jpg";
import styles from "./styles.module.css";
import { ROUTES } from "../../routes/routes";
import { Link } from "react-router-dom";

interface RegisterPageProps {
  email: string;
  password: string;
  confirmPassword: string;
  isRememberMe: boolean;
  passwordError: string;
}

export const RegisterPage: React.FC<any> = () => {
  const initialState: RegisterPageProps = {
    email: "",
    password: "",
    confirmPassword: "",
    isRememberMe: false,
    passwordError: ""
  };
  const [formValue, setFormValue] = useState(initialState);
  const { email, password, isRememberMe, confirmPassword } = formValue;
  const [formErrors, setFormErrors]= useState({
    email:'',
    password:'',
    confirmPassword:''
  });

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.checked });
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: any = {};

    if (!validateEmail(email)) {
      errors.email = 'Email contains an error example: example@gmail.com';
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Password mismatch';
    }

    if (!validatePassword(password)) {
      errors.password = 'The password must contain at least one number, one lowercase letter and one uppercase letter, and be at least 8 characters long.';
    }

    setFormErrors(errors);

    return;
  };

  return (
    <div className={styles.fullscreen}>
      <div className={styles.formContainer}>
        <div className={styles.imgContainer}>
          <img src={logo} className="object-cover" alt="logo" />
        </div>
        <form className={styles.loginContainer} onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold text-black mb-8">Register your account</h1>
          <label htmlFor="email" className="text-sm mb-2">
            Email
          </label>
          <input
            className="rounded-md border border-slate-500 mb-4 px-4 py-2 w-full"
            type="email"
            placeholder="example@gmail.com"
            id="email"
            name="email"
            value={email}
            onChange={handleChangeValue}
          />
          <label className={styles.Error}>{formErrors.email}</label>        
          <label htmlFor="password" className="text-sm ">
            Password
          </label>
          <input
            className="rounded-md border border-slate-500 mb-4 px-4 py-2 w-full"
            type="password"
            placeholder="Enter password"
            id="password"
            name="password"
            value={password}
            onChange={handleChangeValue}
          />
          <label htmlFor="confirmPassword" className="text-sm ">
            Confirm password
          </label>
          <p className={styles.Error}>{formErrors.confirmPassword}</p>
          <input
            className="rounded-md border border-slate-500 mb-4 px-4 py-2 w-full"
            type="password"
            placeholder="Confirm password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChangeValue}
          />
          
          <div className="flex items-center mb-6">
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
          <p className={styles.Error}>{formErrors.password}</p>
          

          <button
            type="submit"
            className="border bg-green-600 rounded-md hover:bg-green-400 h-12 text-white mb-8 w-full"
          >
            Register now
          </button>
          <p className="text-sm text-center">
            Already have an account?{" "}
            <Link to={ROUTES.login} className="text-sm text-blue-600">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
