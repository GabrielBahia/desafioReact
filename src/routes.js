import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Members from './pages/Members';



export default function AppRouter() {
    return (
    <main className='container'>
        <Router>
         {<NavBar />}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/membros' element={<Members />} />
            </Routes>
         {<Footer />}
        </Router>
    </main>
    );
  }