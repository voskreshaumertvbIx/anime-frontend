import { configureStore } from "@reduxjs/toolkit";
import { UserServicesApi } from "./services/userSevices";
import { setupListeners } from "@reduxjs/toolkit/query";
import { animeApi } from "./services/animeSevices";
import { createAnimeApi } from "./services/createAnimeApi";

const store = configureStore({
  reducer: {
    [createAnimeApi.reducerPath]:createAnimeApi.reducer,
    [animeApi.reducerPath]:animeApi.reducer,
    [UserServicesApi.reducerPath]: UserServicesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(UserServicesApi.middleware,animeApi.middleware,createAnimeApi.middleware),
});








// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// setupListeners(store.dispatch)
export default store;
