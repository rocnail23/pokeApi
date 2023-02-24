import { configureStore } from "@reduxjs/toolkit";
import trainer from "./slices/trainerName.slice";


const store = configureStore({
    reducer:{
        trainer
    }
})

export default store