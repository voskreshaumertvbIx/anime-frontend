import React, { useState } from "react";
import { toast } from "react-toastify";

import { useLoginUserMutation, useRegisterUserMutation } from "../../redux/services/userSevices";
import { authValidate } from "../../services/validation/validationAuth";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import styles from "./styles.module.css";

const RegisterForm = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { email, password, confirmPassword } = formValue;
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setLogin] = useState(true); // Set default to true
  const [registerUser] = useRegisterUserMutation();
  const [loginUser] = useLoginUserMutation();

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLogin) {
      if (authValidate(email, password, true)) {
        try {
          const response: { data: any } | { error: any } = await loginUser({
            email,
            password,
          });
          if ("error" in response) {
            toast.error(
              response.error.data.message || "Failed to login. Please try again."
            );
          } else {
            toast.success("Login successful!");
            localStorage.setItem("access_token", response.data.access_token);
            localStorage.setItem("refresh_token", response.data.refresh_token);
          }
        } catch (error) {
          toast.error("Failed to login. Please try again.");
        }
      }
    } else {
      if (authValidate(email, password, false, confirmPassword)) {
        try {
          const response: { data: any } | { error: any } = await registerUser({
            email,
            password,
          });

          if ("error" in response) {
            toast.error(
              response.error.data.message || "Failed to register. Please try again."
            );
          } else {
            toast.success("Registration successful!");
          }
        } catch (error) {
          toast.error("Failed to register. Please try again.");
        }
      }
    }
  };

  return (
    <section className={`${styles.register_section} ${isLogin && styles.login}`}>
      <div className={styles.image_container}>
        <img
          className={`${styles.register_image} ${isLogin && styles.login_image}`}
          src={isLogin ? "./images/authForms/forlogin.jpg" : "./images/authForms/forregister.jpg"}
          alt="Register background"
        />
        <p className={styles.nav_text}>
          {isLogin ? "Wanna create account?" : "Already have an account?"}
        </p>
        <button
          type="button"
          className={styles.submit_button}
          onClick={() => setLogin(!isLogin)}
        >
          {isLogin ? "Sign up" : "Sign in"}
        </button>
      </div>
      <form className={styles.register_form} onSubmit={handleSubmit}>
        <h1 className={styles.register_name}>
          {isLogin ? "Login account" : "Create account"}
        </h1>
        <div className={styles.input_container}>
          <label className={styles.input_label} htmlFor="">
            Email
          </label>
          <input
            className={styles.form_input}
            onChange={handleChangeValue}
            placeholder="enter email"
            value={email}
            name="email"
            type="text"
          />
        </div>
        <div className={styles.input_container}>
          <label className={styles.input_label} htmlFor="">
            Password
          </label>
          <input
            className={styles.form_input}
            onChange={handleChangeValue}
            value={password}
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="password"
          />
          <button
            type="button"
            className={styles.show_password}
            onClick={toggleShowPassword}
            aria-label="Toggle Password Visibility"
          >
            {showPassword ? <FaRegEye className={styles.showpass_icon} /> : <FaRegEyeSlash className={styles.showpass_icon} />}
          </button>
        </div>
        {!isLogin && (
          <div className={styles.input_container}>
            <label className={styles.input_label} htmlFor="">
              Confirm password
            </label>
            <input
              className={styles.form_input}
              onChange={handleChangeValue}
              value={confirmPassword}
              name="confirmPassword"
              placeholder="confirm password"
              type={showPassword ? "text" : "password"}
            />
            <button
              type="button"
              className={styles.show_password}
              onClick={toggleShowPassword}
              aria-label="Toggle Password Visibility"
            >
              {showPassword ? <FaRegEye className={styles.showpass_icon} /> : <FaRegEyeSlash className={styles.showpass_icon} />}
            </button>
          </div>
        )}
        <button type="submit" className={styles.submit_button}>
          {isLogin ? "Sign in" : "Sign up"}
        </button>
      </form>
    </section>
  );
};

export default RegisterForm;
