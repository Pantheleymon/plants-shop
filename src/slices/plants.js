import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";

const plantsAdapter = createEntityAdapter();

const initialState = plantsAdapter.getInitialState({
    plantsLoadingStatus: 'idle'
});

export const fetchPlants = createAsyncThunk(
    'plants/fetchPlants',
    async () => {
        const {request} = useHttp();
        return await request('https://perenual.com/api/species-list?key=sk-gksm65fdb39ba70354827');
    }
)

const plantsSlice = createSlice({
    name: 'plants',
    initialState, 
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPlants.pending, state => {state.plantsLoadingStatus = 'loading'})
        .addCase(fetchPlants.fulfilled, (state, action) => {
            state.plantsLoadingStatus = 'idle';
            plantsAdapter.setAll(state, action.payload);
        })
        .addCase(fetchPlants.rejected, state => {state.plantsLoadingStatus = 'error'})
        .addDefaultCase(() => {});
    }
});

const {actions, reducer} = plantsSlice;

export default reducer;

export const {selectAll} = plantsAdapter.getSelectors(state => state.plants);

export const {
    plantsFetching,
    plantsFetched,
    plantsFetchingError
} = actions;