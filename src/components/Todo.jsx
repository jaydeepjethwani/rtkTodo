import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { removeTodo, updateTodo } from '../features/todoSlice'

function Todo() {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');
    const [check, setCheck] = useState(false);
    const handleUpdate = (id, text) => {    
         (check) ? null:  setEditId(id); // Set the current todo being edited
        setEditText(text); // Pre-fill the input with the todo's current text
    };
    const handleSave = () => {
        if (editText) {
            dispatch(updateTodo({ id: editId, text: editText })); // Dispatch update
            setEditId(null); // Clear editing state
            setEditText(''); // Clear input field
        }
    }
    return (

        <>
            <h1 className="text-2xl text-white mt">Todo List</h1>
            <ul className="list-none">

                {todos.map((todo) => <li key={todo.id}
                    className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded">
                       
                    { editId === todo.id ? (
                        <div className=" inline-flex text-white items-center mx-4  p-2 w-full">
                            
                            <input
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                className="inline-flex text-white w-full items-center border border-gray-300  bg-slate-700  p-2 flex-glow"
                            />
                            <button onClick={handleSave} className='text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md ml-2'>Save</button>
                        </div>
                    ) : (
                        <div
                            className="inline-flex text-white items-center mx-4 w-full border border-gray-300 p-2  ">
                         { todo.text}
                        </div>
                    )}
                    <div
                        className="flex items-center ml-auto space-x-2">

                        {editId === todo.id ? null :
                            ( 
                                <button
                                    onClick={() => handleUpdate(todo.id, todo.text)}

                                    className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                                    disabled={ check }
                                    >
                                    Update
                                </button>)}
                        <button
                            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"

                            onClick={() => dispatch(removeTodo(todo.id)
                            )}>
                            delete
                        </button>
                    </div>
                </li>
                )}



            </ul>
        </>
    )
}

export default Todo
