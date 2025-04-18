import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        gptMovies: null,
        movieResults: null,
        movieNames: null,
    },
    reducers: {
        toggleGptSearchValue: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const {movieNames, movieResults} = action.payload
            state.movieNames = movieNames;
            state.movieResults = movieResults
        }
    }
})

export const {toggleGptSearchValue, addGptMovieResult} = gptSlice.actions;
export default gptSlice.reducer;
