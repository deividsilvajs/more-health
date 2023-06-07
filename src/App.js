import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainPage from './pages/Main';
import UserPage from './pages/User';

function App() {

    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/userPage/:id' element={<UserPage />} />
                </Routes>
            </Router>
        </div>
    );

};

export default App;