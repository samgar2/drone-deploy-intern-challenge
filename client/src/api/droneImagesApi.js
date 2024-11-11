import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Create an API using RTK Query
export const droneImagesApi = createApi({
  //Define the reducer path
  reducerPath: "droneImagesApi",
  //Set the base URL for API requests
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/",
    //Set headers
    prepareHeaders(headers) {
      headers.set("Content-type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    //Define our endpoints for the API

    getImages: builder.query({
      //get all images
      query: () => "/images",
    }),

  }),
});

//Export hooks for each endpoint
export const {
  useGetImagesQuery,
} = droneImagesApi;
