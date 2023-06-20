import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainPage from './pages/Main';
import UserPage from './pages/User';
import { UserProvider } from './User/UserContext';
import { useState } from 'react';

function App() {

    const [user, setUser] = useState({});

    return (
        <div>
            <Router>
                <Routes>
                    <UserProvider userState={[user, setUser]}>
                        <Route path='/' element={<MainPage />} />
                        <Route path='/userPage/:id' element={<UserPage />} />
                    </UserProvider>
                </Routes>
            </Router>
        </div>
    );

};

export default App;