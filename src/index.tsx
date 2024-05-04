// ./src/index.tsx

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import store from "./redux/store"; // Используйте default экспорт здесь
import { Provider } from "react-redux";
import ReactDOM from "react-dom";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
