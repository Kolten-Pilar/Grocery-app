import { useState } from 'react'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='fixed p-2 z-10 right-20 top-4 bg-violet-300 dark:bg-orange-300 text-lg rounded-md'>hello world</h1>
      <h2 className='text-xl rounded-lg bg-red-500 text-center justify-center'>hello</h2>
    </>
  )
}

export default App
