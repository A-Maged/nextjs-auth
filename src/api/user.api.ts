import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";

type GetProfileResponse = {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  role: string;
};

type GetPhotosResponse = {
  id: number;
  name: string;
  url: string;
}[];

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: axiosBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BACKEND_API_URL! }),
  endpoints: (builder) => ({
    profile: builder.query<GetProfileResponse, void>({
      query: () => ({ url: "/users/profile", method: "GET" }),
    }),
    photos: builder.query<GetPhotosResponse, void>({
      query: () => ({
        url: `/users/photos`,
        method: "GET",
      }),
    }),
  }),
});

export const { useProfileQuery, useLazyPhotosQuery, usePhotosQuery } = userApi;
