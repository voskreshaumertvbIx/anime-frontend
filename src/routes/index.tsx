import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './../pages/loginPage/loginPage';
import { ROUTES } from './routes';
import MainPage from '../pages/mainPage/mainPage';
import{ AnimePage} from '../pages/animePage/animePage';
import { RegisterPage} from '../pages/registerPage/registerPage';
import { CreateAnimePage } from '../pages/createAnimePage/createAnimepage';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.login} element={<LoginPage />} />
      <Route path={ROUTES.register} element={<RegisterPage />} />
      <Route path={ROUTES.mainpage} element={<MainPage />} />
      <Route path={ROUTES.anime} element={<AnimePage />} />


      <Route path={ROUTES.createAnime} element={<CreateAnimePage />} />
    </Routes>
  );
}

export default AppRoutes;
