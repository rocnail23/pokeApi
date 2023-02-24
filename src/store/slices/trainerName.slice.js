import { createSlice } from "@reduxjs/toolkit";

const trainerName = createSlice({
    name: "trainerName",
    initialState: null,
    reducers:{
        setTrainerName: (state, action) => action.payload
    }
})

export default trainerName.reducer
export const {setTrainerName} = trainerName.actions