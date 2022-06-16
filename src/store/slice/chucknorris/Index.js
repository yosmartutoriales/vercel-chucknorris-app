import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { urlBase } from "../../../helpers/Config";


export const chucknorrisSlice = createSlice({

    name: "chucknorris",

    initialState: {
        dataChucknorris: [],
        loading: false
    },

    reducers: {

        setDataChucknorris: (state, action) => {
            state.dataChucknorris = action.payload;
        },

        setDataLoading: (state, action) => {
            state.loading = action.payload;
        }
    }

})

export const { setDataChucknorris, setDataLoading } = chucknorrisSlice.actions;
export default chucknorrisSlice.reducer;


export const getChuckNorris = () => async (dispatch) => {
    dispatch(setDataLoading(true));
    try {
        const response = await axios(`${urlBase}jokes/random`, {
            method: "GET",
            headers: { "Acces-control-Allow.Origin": true }
        })
        console.log(response);
        dispatch(setDataChucknorris(response.data))
        dispatch(setDataLoading(false));

    } catch (error) {
        console.warn(error)
        dispatch(setDataLoading(false));
    }
}