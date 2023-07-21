import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialState } from './Interfaces';

const initialState: IInitialState = {
    upNavGroupState: ''
}

const upNavGroupStateSlice = createSlice({
    name: 'upNavGroupState',
    initialState: initialState.upNavGroupState,
    reducers: {
        setUpNavGroupState: (state, action: PayloadAction<string>)=>state = action.payload
    }
})

//export actions
export const { setUpNavGroupState } = upNavGroupStateSlice.actions;

//export all redusers
export const upNavGroupStateReducer = upNavGroupStateSlice.reducer