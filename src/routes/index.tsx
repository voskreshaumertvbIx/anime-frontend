import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './../pages/loginPage/loginPage';
import { ROUTES } from './routes';
import { RegisterPage } from '../pages/registerPage/registerPage';
import  MainPage  from '../pages/mainPage/mainPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.login} element={<LoginPage />} />
      <Route path={ROUTES.register} element={<RegisterPage />} />
      <Route path={ROUTES.mainpage} element={<MainPage />} />
    </Routes>
  );
}

export default AppRoutes;

