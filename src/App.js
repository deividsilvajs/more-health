import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MainPage from './pages/Main'
import UserPage from './pages/User'
import Private from './Private'
import { UserProvider } from './User/UserContext'

const App = () => {

    const [user, setUser] = useState({})

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