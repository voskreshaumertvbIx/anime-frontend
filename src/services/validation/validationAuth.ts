import { toast } from "react-toastify";

export const authValidate = (
  email : string, 
  password : string, 
  isLogin? : boolean,
  confirmPassword? : string
) => {
  switch (true) {
    case !email || !password || (!isLogin && !confirmPassword):
      toast.error("Please complete all fields.");
      return false;

    case !validateEmail(email):
      toast.error("Email contains an error example: example@gmail.com.");
      return false;

    case isLogin && password !== confirmPassword:
      toast.error("Password mismatch.");
      return false;

    case !validatePassword(password):
      toast.error(
        "The password must contain at least one number, one lowercase letter and one uppercase letter, and be at least 8 characters long."
      );
      return false;
  }
  return true;
}

export const validatePassword = (password: string) => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return passwordRegex.test(password);
};

export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};