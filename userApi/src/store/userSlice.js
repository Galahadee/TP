import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { useState } from "react";
import axios from 'axios';

// const axios = require('axios');
const url = "https://jsonplaceholder.typicode.com/users";

// const [,setIsLoaded]=useState(false);
// const [error,setError]=useState(null);

export const fetchUsers = createAsyncThunk(
    'fetchUsers',
    
    async () => {
        try {
            const response = await fetch(url)
            .then(res => res.json())
            // .then(
            //     (result) => {
            //         setList(result);
            //     }
            // );

            // console.log(response)

            return response
        } catch (error) {
            console.log(error)
        }
    }
);
 
export const userSlice = createSlice({
    name: 'users',
    initialState : {users:[]},
    reducers: {
    },
    extraReducers: (builder) => {
      builder.addCase(fetchUsers.pending, (state, action) => {
      });
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
        let users = state.users;
        users={...users,users:[...action.payload]};
        console.log(users)
        return users;
      });
      builder.addCase(fetchUsers.rejected, (state, action) => {
        // console.log(state)
      })
    },
  })


export default configureStore({
    reducer: { 
        users : userSlice.reducer,  
    }, 
});