import './App.css';
import Home from './pages/Home';
import HomeUnregistered from './pages/HomeUnregistered';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/browse' element={<Home />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/' element={<HomeUnregistered />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
