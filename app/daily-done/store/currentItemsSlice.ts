// Or from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import ITask from "../models/ITask";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints: (build) => ({
    // The query accepts a number and returns a Post
    getCurrentItems: build.query<ITask, number>({
      // note: an optional `queryFn` may be used in place of `query`
      query: (id) => ({ url: `post/${id}` }),
      // Pick out data and prevent nested properties in a hook or selector
      // transformResponse: (response: { data: Post }, meta, arg) => response.data,
      // Pick out errors and prevent nested properties in a hook or selector
      // transformErrorResponse: (
      // response: { status: string | number },
      // meta,
      // arg
      // ) => response.status,
    }),
  }),
});
