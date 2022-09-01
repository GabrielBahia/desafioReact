import Home from './pages/Home';
import NavBar2 from './components/NavBar2';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Members from './pages/Members';
import Administracao from './pages/Adm/Administracao';
import FormCadastro from './pages/Adm/FormCadastro';
import VerMembro from './pages/Adm/VerMembro';
import Login from './pages/Login';



export default function AppRouter() {
    return (
    <main className='container'>
        <Router>
         {<NavBar2 />}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/membros' element={<Members />} />
                <Route path='/login' element={<Login/>} />
                <Route path='/adm' element={<Administracao />} />
                <Route path='/adm/criar' element={<FormCadastro/>} />
                <Route path='/adm/ver/:id' element={<VerMembro/>} />
                <Route path='/adm/criar/:id' element={<FormCadastro/>} />
            </Routes>
         {<Footer />}
        </Router>
    </main>
    );
  }