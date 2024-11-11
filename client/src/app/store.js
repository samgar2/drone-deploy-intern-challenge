import { configureStore } from "@reduxjs/toolkit"
import { droneImagesApi } from "../api/droneImagesApi"

//Configure redux store
const store = configureStore({
reducer: {
    //Set the reducer for my droneImages
    [droneImagesApi.reducerPath]: droneImagesApi.reducer
},

middleware: (getDefaultMiddleware) =>
getDefaultMiddleware().concat(droneImagesApi.middleware) //Add custom middleware
})

export default store
