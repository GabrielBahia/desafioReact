import Home from './pages/Home';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



export default function AppRouter() {
    return (
    <main className='container'>
        <Router>
         {<NavBar />}
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    </main>
    );
  }