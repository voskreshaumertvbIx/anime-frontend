// ./src/index.tsx

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import store from "./redux/store"; // Используйте default экспорт здесь
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
// @ts-ignore
const root = createRoot(domNode);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
