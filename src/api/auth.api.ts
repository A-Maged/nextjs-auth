import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";

type JWTTokens = { accessToken: string; refreshToken: string };

type RegisterResponse = JWTTokens;

type RegisterRequest = {
  fullName: string;
  email: string;
  password: string;
  avatar: File;
  photos: File[];
};

type LoginResponse = JWTTokens;

type LoginRequest = {
  email: string;
  password: string;
  role: string;
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  endpoints: (builder) => ({
    register: builder.mutation<RegisterResponse, FormData>({
      query: (data) => ({
        url: "/register",
        method: "POST",
        data,
      }),
    }),
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (data) => ({
        url: "/login",
        method: "POST",
        data,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
