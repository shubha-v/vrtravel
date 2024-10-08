import React from "react"
import './App.css'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './Components/Home'

const App = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default App