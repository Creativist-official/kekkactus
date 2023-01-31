import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { backend } from "../env";

const cookie = new URLSearchParams(document.cookie.replaceAll("&", "%26").replaceAll("; ","&"))

export const loginUser = createAsyncThunk("user/login", (arg, {rejectWithValue}) => {
    return fetch(`${backend}/api/login.php`, {
        method: "POST", 
        body: JSON.stringify(arg),
        credentials: 'include',
    })
    .then(response => response.ok ? response.json() : Promise.reject(response))
    .catch(err => {
        return err.json().then(e => rejectWithValue(e));
    });
});
export const registerUser = createAsyncThunk("user/register", (arg, {rejectWithValue}) => {
    return fetch(`${backend}/api/register.php`, {
        method: "POST", 
        body: JSON.stringify(arg),
        credentials: 'include',
    })
    .then(response => response.ok ? response.json() : Promise.reject(response))
    .catch(err => {
        return err.json().then(e => rejectWithValue(e));
    });
});

const initialState = {
    user: null,
    status: "idle",
    error: null,
    token: cookie.get("token") || null
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
        .addCase(loginUser.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.status = "success";
            state.user = {
                email: action.payload.attributes.email,
                displayName: action.payload.attributes.display_name,
            };
            state.token = action.payload.token;
            toast.success("Benvenuto "+state.user.displayName+"!", {autoClose: 1000, hideProgressBar: true, position: "top-center",})
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload.message;
            toast.error(state.error)
        })

        .addCase(registerUser.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.status = "success";
            state.user = {
                email: action.payload.attributes.email,
                displayName: action.payload.attributes.display_name,
            };    
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload.message;
            toast.error(state.error)
        })
    }
});

export default userSlice.reducer;


const cookieObj = new URLSearchParams(document.cookie.replaceAll("&", "%26").replaceAll("; ","&"))
