import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAuth } from "../../interfaces/iAuth";
import { ITokens } from "../../interfaces/ITokens";

import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { toast } from "react-toastify";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000",
  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
const refreshBaseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000",
  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem("refresh_token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshResult = await refreshBaseQuery(
      "/auth/refresh",
      api,
      extraOptions
    );

    if (refreshResult.data) {
      const { access_token, refresh_token } = refreshResult.data as ITokens;
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);

      result = await baseQuery(args, api, extraOptions);
    } else {
      toast.error('Unauthorized')
    }
  }
  return result;
};

export const UserServicesApi = createApi({
  reducerPath: "UserServicesApi",
  baseQuery: baseQueryWithReauth,
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

export const { useRegisterUserMutation, useLoginUserMutation } =
  UserServicesApi;
