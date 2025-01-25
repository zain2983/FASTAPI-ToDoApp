import React from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {
    return (
        <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>

            {/* title  */}
            <div className='flex items-center mt-7 gap-2'>
                <img className='w-8 h-8' src={todo_icon} alt="todo_icon" />
                <h1 className='text-3xl font-bold text-stone-900'>To-Do List</h1>
            </div>


            {/* input box */}
            <div className='flex items-center my-7 bg-gray-200 rounded-full'>
                <input type="text" placeholder='Add a new task' className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' />
                <button className='border-none bg-blue-500 rounded-full w-32 h-14 text-lg text-white font-medium'>Add</button>
            </div>

            {/* todo list */}
            <div >
                <TodoItems text="Learn Coding 1" />
                <TodoItems text="Learn Coding 2" />
                <TodoItems text="Learn Coding 3" />


            </div>


        </div>
    )
}

export default Todo
