import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-600 text-black p-4 rounded-xl mb-5'>Hello Sayan</h1>
       <Card username="Sayan" profile= "click me" />
       <Card username="Mota" profile= "visit me" />
    </>
  )
}

export default App
