import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialState } from './Interfaces';

const initialState: IInitialState = {
    upNavGroupState: '',
    iconState: ''
}

const upNavGroupStateSlice = createSlice({
    name: 'upNavGroupState',
    initialState: initialState.upNavGroupState,
    reducers: {
        setUpNavGroupState: (state, action: PayloadAction<string>)=>state = action.payload
    }
})

const iconStateSlice = createSlice({
    name: 'iconState',
    initialState: initialState.iconState,
    reducers: {
        setIconState: (state, action: PayloadAction<string>)=>state = action.payload
    }
}) 

//export actions
export const { setUpNavGroupState } = upNavGroupStateSlice.actions;
export const { setIconState } = iconStateSlice.actions;

//export all redusers
export const upNavGroupStateReducer = upNavGroupStateSlice.reducer;
export const iconsStateReducer = iconStateSlice.reducer;