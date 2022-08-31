import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Members from './pages/Members';
import Adm from './pages/Adm';
import Login from './pages/Login';



export default function AppRouter() {
    return (
    <main className='container'>
        <Router>
         {<NavBar />}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/membros' element={<Members />} />
                <Route path='/login' element={<Login/>} />
                <Route path='/adm' element={<Adm />} />
            </Routes>
         {<Footer />}
        </Router>
    </main>
    );
  }