
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userAuth } from "../@types/@types";


type authState={
  
    isAuthenticated: boolean|null;
    user: {
        name: string;
        userId: string;
        role: string;
    };

}

const initialAuthState:authState = {
  isAuthenticated: null,
  user: {
    name: "",
    userId: "",
    role: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setIsAuthenticated(state, action: PayloadAction<userAuth>) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    setisNotAuthenticated(state) {
      state.isAuthenticated = false;
      
    },
  },
});

export const { setIsAuthenticated, setisNotAuthenticated } = authSlice.actions;
export default authSlice.reducer;
