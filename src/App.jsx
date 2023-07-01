import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style/TaskForm.css'
import TaskForm from './components/TaskForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='father'>
    <TaskForm />
    </div>
    </>
  )
}

export default App
