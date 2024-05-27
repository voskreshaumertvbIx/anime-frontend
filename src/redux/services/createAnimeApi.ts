import { createApi} from "@reduxjs/toolkit/query/react";

import { baseQueryWithReauth } from "./userSevices";
import { CreateAnime } from "../../interfaces/iAnimeCreate";
export const createAnimeApi = createApi({
  reducerPath: "createAnimeApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    createAnime: build.mutation<any, FormData>({
      query: (formData) => ({
        url: `/anime/create`,
        method: "POST",
        body: formData,
        // headers: {
        //   // Устанавливаем Content-Type в 'multipart/form-data', так как мы отправляем FormData
        //   "Content-Type": "multipart/form-data",
        // },
      }),
    }),
  }),
});

export const {useCreateAnimeMutation} = createAnimeApi