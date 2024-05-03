import { configureStore } from '@reduxjs/toolkit';
import {UserServicesApi} from './services/userSevices'


export const store = configureStore({
  reducer:{[UserServicesApi.reducerPath]:UserServicesApi.reducer,
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(UserServicesApi.middleware)
  },)