import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            { id: 1, text: 'First Item'},
            { id: 2, text: 'Second Item'},
            { id: 3, text: 'Third Item'},
        ]
    },
    reducers: {
        ADD_TODO: (state, action) => {
            state.todos.push(action.payload)
        },
        CHANGE_TODO: (state, action) => {
            console.log(action)
            const index = state.todos.findIndex(todo => todo.id === action.payload.id);
            if (index !== -1) {
                state.todos[index].text = action.payload.text
            }
        },
        DELETE_TODO: (state, action) => {
            return {todos: state.todos.filter(todo => todo.id !== action.payload)}
        }
    }
});

export const { ADD_TODO, DELETE_TODO, CHANGE_TODO } = todosSlice.actions;

export default todosSlice.reducer;