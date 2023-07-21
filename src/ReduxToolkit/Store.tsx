import { configureStore } from '@reduxjs/toolkit';
import { upNavGroupStateReducer } from './Slices';

const store = configureStore({
    reducer: {
        upNavGroupState: upNavGroupStateReducer
    }
})

export default store;