import {configureStore} from '@reduxjs/toolkit'
import watchList from './reducers/watchlist'

export const store = configureStore({
    reducer : {
        watchListCount : watchList,
    }
})