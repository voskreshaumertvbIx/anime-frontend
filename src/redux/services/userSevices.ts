import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAuth } from "../../interfaces/iAuth";
import { ITokens } from "../../interfaces/ITokens";

import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'

export const UserServicesApi = createApi({
  reducerPath: "UserServicesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (build) => ({
    registerUser: build.mutation<null, IAuth>({
      query: (userData: IAuth) => ({
        url: "/auth/signup",
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: build.mutation<ITokens, IAuth>({
      query: (userData: IAuth) => ({
        url: "/auth/signin",
        method: "POST",
        body: userData,
      }),
      
    }),
  }),
});

const baseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:5000' })

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery('/refreshToken', api, extraOptions)
    if (refreshResult.data) {
     
      const { access, refresh } = refreshResult.data as { access: string, refresh: string };
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);
      
      
      result = await baseQuery(args, api, extraOptions)
    } else {
      ///logOut
    }
  }
  return result
}



export const { useRegisterUserMutation, useLoginUserMutation } = UserServicesApi;