import { useState } from 'react'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="flex flex-col items-center gap-6 mt-8">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <AddTodo></AddTodo>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
  
  
</div>
    </>
  )
}

export default App
