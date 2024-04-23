import React from 'react'
// import ReactDOM from 'react-dom/client'*/
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import { Link } from 'react-router-dom'

// ReactDOM.createRoot(document.getElementById('root')).render */(


<BrowserRouter>
    <Routes>
        <Route path='/' element={<AllPlayers/>} />
        <Route path='/players/:id element={<SinglePlayer />} />
    </Routes>
</BrowserRouter>