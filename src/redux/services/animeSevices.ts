import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import{ AnimeTitle} from './../../../generated'
import { baseQueryWithReauth } from "./userSevices";
export const animeApi = createApi({
  reducerPath: "animeApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getAnime: build.query<AnimeTitle, number>({
      query: (id: number) => ({
        url: `/anime/${id}`,
        method: "GET",
      }),
    }),
  }),

});

export const {useGetAnimeQuery} = animeApi