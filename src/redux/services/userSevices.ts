import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAuth } from "../../interfaces/iAuth";
import { ITokens } from "../../interfaces/ITokens";

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

export const { useRegisterUserMutation, useLoginUserMutation } = UserServicesApi;
