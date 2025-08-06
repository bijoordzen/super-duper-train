import React from 'react'

const AddTodo = () => {
  return (
    <div>
        <div class="flex justify-center gap-4">
    <input type="text" placeholder="Enter task" class="border p-2 rounded w-64" />
    <input type="date" class="border p-2 rounded w-48" />
    <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add</button>
  </div>
    </div>
  )
}

export default AddTodo