import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './../pages/loginPage/loginPage';
import { ROUTES } from './routes';
import { RegisterPage } from '../pages/registerPage/registerPage';
import MainPage from '../pages/mainPage/mainPage';
import {slides , sliderSettings} from './../pages/mainPage/animeData'
import AnimePage from '../pages/animePage/animePage';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.login} element={<LoginPage />} />
      <Route path={ROUTES.register} element={<RegisterPage />} />
      <Route path={ROUTES.mainpage} element={<MainPage slides={slides} settings={sliderSettings} />} />
      <Route path={ROUTES.anime} element={<AnimePage />} />
    </Routes>
  );
}

export default AppRoutes;
