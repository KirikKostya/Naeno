import { configureStore } from '@reduxjs/toolkit';
import { iconsStateReducer, upNavGroupStateReducer } from './Slices';

const store = configureStore({
    reducer: {
        upNavGroupState: upNavGroupStateReducer,
        iconState: iconsStateReducer
    }
})

export default store;