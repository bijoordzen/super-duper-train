import React from 'react'

const TodoItem = () => {
  return (
    <div>
       <div class="flex justify-center items-center gap-6">
  <h1 class="text-xl font-semibold">Buy Milk</h1>
  <h1 class="text-gray-600">4/3/2025</h1>
  <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>
</div>

    </div>
  )
}

export default TodoItem