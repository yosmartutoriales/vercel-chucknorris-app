import { configureStore } from "@reduxjs/toolkit";
import chucknorris from './slice/chucknorris/Index.js'

export default configureStore({
    reducer: {
        chucknorris,

    }
})