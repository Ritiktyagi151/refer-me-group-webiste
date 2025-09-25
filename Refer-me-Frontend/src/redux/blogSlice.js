import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blog: null,
}

const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        setBlog: (state, payload) => {
            state.blog = payload.payload;
        }
    }
})

export const { setBlog } = blogSlice.actions;
export default blogSlice.reducer;