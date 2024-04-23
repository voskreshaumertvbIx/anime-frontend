import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './../pages/loginPage/loginPage';
import { ROUTES } from './routes';
import { RegisterPage } from '../pages/registerPage/registerPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.login} element={<LoginPage />} />
      <Route path={ROUTES.register} element={<RegisterPage />} />
    </Routes>
  );
}

export default AppRoutes;

