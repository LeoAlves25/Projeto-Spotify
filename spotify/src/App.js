import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home'; 
import Login from './pages/login/Login'; 
import Cadastro from './pages/cadastro/Cadastro'; 
import Faq from './pages/Faq/Faq';
import Principal from './pages/principal/index';
import Footer2 from './components/Footer2';

function App() {
  return (
    <>
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="login" element={<Login />}/>
            <Route path="cadastro" element={<Cadastro />} />
            <Route path="faq" element={<Faq />} />
            <Route path="principal" element={<Principal />} /> 
        </Routes>
    </div>
    <Footer2 />
    </>
  );
}

export default App;
