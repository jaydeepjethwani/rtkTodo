import React from 'react'
import { createSlice, nanoid } from '@reduxjs/toolkit'
const initialState = {
    todos:  [{id: 1, text: "Hello world"}]
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>(todo.id!==action.payload))
        },
            updateTodo:(state,action)=>{
                const todo = state.todos.find((todo) => todo.id === action.payload.id );
                if (todo) {
                    todo.text = action.payload.text;
                }
                
                  
        }
    }
})

export default todoSlice.reducer


export const { addTodo,removeTodo,updateTodo } = todoSlice.actions    