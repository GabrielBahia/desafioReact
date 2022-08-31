import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Members from './pages/Members';
import Administracao from './pages/Adm/Administracao';
import FormCadastro from './pages/Adm/FormCadastro';
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
                <Route path='/adm' element={<Administracao />} />
                <Route path='/adm/criar' element={<FormCadastro/>} />
                <Route path='/adm/ver/:id' element={<FormCadastro/>} />
                <Route path='/adm/criar/:id' element={<FormCadastro/>} />
            </Routes>
         {<Footer />}
        </Router>
    </main>
    );
  }