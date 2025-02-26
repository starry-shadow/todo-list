import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from "./components/index.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 class="title">Todo List</h1>
      <Todo/>
    </>
  )
}

export default App
