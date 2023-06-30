import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MainPage from './pages/Main'
import UserPage from './pages/User'
import Private from './Private'
import UserProvider from './User/UserContext'
import User from './User/User'

const App = () => {

    const savedUser = () => {
        const value = sessionStorage.getItem('user')
        if (value) {
            return new User(JSON.parse(value))
        } else {
            return {}
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