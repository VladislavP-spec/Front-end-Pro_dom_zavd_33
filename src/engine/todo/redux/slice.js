import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'todo',
    initialState: {
        items: [],
        loading: true,
    },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        },
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
    }
})

export default slice;