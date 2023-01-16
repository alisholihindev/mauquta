import { useState } from 'react'
import { BrowserRouter, Router} from 'react-router-dom'
import MyRoutes from './routes'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyRoutes/>
      </BrowserRouter>
    </div>
  )
}

export default App
