import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    number: 0,
    active:true
}

export const increment = createAsyncThunk(
    'increment',
    async (number)=>{
        let response = await delay(number,500);
        return response
    }
)

function delay(number,t) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(number++);
        },t)
    })
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(increment.pending,(state,action)=>{

        });
        builder.addCase(increment.fulfilled,(state,action)=>{
            console.log(action.payload)
            let count = action.payload
            if(state.number+action.payload>10){
                count = count+1
            }
            if(state.number+action.payload>20){
                state.active=false;
                return;
            }

            state.number +=count;

        })
    }
});


export default configureStore({
    reducer: counterSlice.reducer // passe le state pour lecture dans useSelector
});