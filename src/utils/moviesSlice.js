import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        trending: null,
        mostWatched: null,
        popular: null,
        favorited: null,
        trailerVideo: null
    },
    reducers: {
        addTrending: (state, action) => {
            state.trending = action.payload;
        },
        addMostWatched: (state, action) => {
            state.mostWatched = action.payload;
        },
        addPopular: (state, action) => {
            state.popular = action.payload;
        },
        addFavorited: (state, action) => {
            state.favorited = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload; 
        }
    }
})

export const {addTrending, addMostWatched, addPopular, addFavorited, addTrailerVideo} = movieSlice.actions;
export default movieSlice.reducer;