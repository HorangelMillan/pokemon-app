import { createSlice } from '@reduxjs/toolkit';

export const userNameSlice = createSlice({
    name: 'userName',
    initialState: '',
    reducers: {
        changeName: (state, action) => action.payload
    }
})

export const { changeName } = userNameSlice.actions;
export default userNameSlice.reducer;