import { configureStore } from "@reduxjs/toolkit";
// import { thunk } from 'redux-thunk';
import logger from 'redux-logger';
import todoSlice from '../engine/todo/redux/slice.js'
import sagaMiddleWare from "./middleware/saga.js";
import {rootSaga} from "./rootSaga.js";
// import {logger} from "./middleware/logger.js";

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
    },
    middleware: () => [
    //     // logger,
        sagaMiddleWare
    ]
})

sagaMiddleWare.run(rootSaga)