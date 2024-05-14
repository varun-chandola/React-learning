import { createSlice } from "@reduxjs/toolkit";

const watchlistReducer = createSlice({
    name :'watchlist' , 
    initialState : [] , 
    reducers : {

        addToWatchList : (state , action) => {
            const alreadyPresent = state.find(movie=>movie.id === action.payload.id);
            if(alreadyPresent) return;
            else{
                state.push(action.payload)
            }
        },
        removeFromWatchList(state,action){
            return state.filter(item => item.id !== action.payload)
        },
    }
})

export const {addToWatchList , removeFromWatchList} = watchlistReducer.actions; 
export default watchlistReducer.reducer ;