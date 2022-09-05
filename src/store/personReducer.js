import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    firstName: '',
    lastName: '',
    age: 1,
    gender: ''
}

const personSlice = createSlice({
    name: 'person',
    initialState: initialState,

    //
    // Reducers use mutating syntax which is ok within createSlice
    // as immer is used internally
    //
    reducers: {
        savePerson(state, action) {
            state = {
                ...action.payload
            }
            return state;
        }
    }
});

export const { savePerson } = personSlice.actions
export default personSlice.reducer
