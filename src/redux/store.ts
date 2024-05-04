import { configureStore } from "@reduxjs/toolkit";
import { UserServicesApi } from "./services/userSevices";

const store = configureStore({
  reducer: {
    [UserServicesApi.reducerPath]: UserServicesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(UserServicesApi.middleware),
});

export default store;
