import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addTodo } from '../features/todoSlice'
function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (input.trim().length > 0){
        dispatch(addTodo(input))
        setInput('')
        }
    }
    return (

        <form onSubmit={handleSubmit} className="space-x-3  col-span-12">
            <h1 className="text-2xl text-white">Add Todo</h1>
            <input type="text"

                placeholder="Add todo"

                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-8/12  "

                value={input}

                onChange={(e) => setInput(e.target.value)} />

            <button
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg "

                type="submit" >
                Add

            </button>
        </form>
    )
}

export default AddTodo
