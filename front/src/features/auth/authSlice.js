import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

// get user from gobal storage.
const user = JSON.parse(localStorage.getItem('user'))


const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


// register user
const register = () => { //38:37 mins in the video

}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: () => {}
})

export const {reset} = authSlice.actions
export default authSlice.reducer
