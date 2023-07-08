import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MainPage from './pages/Main'
import UserPage from './pages/User'
import Private from './Private'
import UserProvider from './user/UserContext'
import User, { DEFAULT_USER } from './user/user'

const App = () => {

    const savedUser = () => {
        const value = sessionStorage.getItem('user')
        if (value) {
            return new User(JSON.parse(value))
        } else {
            return DEFAULT_USER
        }
    }

    const [user, setUser] = useState(savedUser())

    return (
        <div>
            <Router>
                <UserProvider userState={[user, setUser]}>
                    <Routes>
                        <Route path='/' element={<MainPage />} />
                        <Route element={<Private />}>
                            <Route path='/userPage' element={<UserPage />} />
                        </Route>
                    </Routes>
                </UserProvider>
            </Router>
        </div>
    )

}

export default App