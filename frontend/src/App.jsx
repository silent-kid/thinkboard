import React from 'react'
import {Routes,Route} from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <button onClick={()=>toast.success("SUCCESS")}>Click</button>
      <h1 className="text-3xl text-blue-500 bg-teal-200 font-bold underline">
      Hello world!
    </h1>
      <Routes>
        <Route to="/" element={<HomePage/>}/>
        <Route to="/create" element={<CreatePage/>}/>
        <Route to="/note/:id" element={<NoteDetailPage/>}/>
      </Routes>
    </div>
  )
}

export default App