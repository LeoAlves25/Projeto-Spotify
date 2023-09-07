import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home'; 
import Login from './pages/login/Login'; 
import Cadastro from './pages/cadastro/Cadastro'; 
// import FAQ from './pages/faq/FAQ';
// import Principal from './pages/principal/Principal';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="cadastro" element={<Cadastro />} />
            {/* <Route path="faq" element={<FAQ />} /> */}
            {/* <Route path="principal" element={<Principal />} /> */}
        </Routes>
    </div>
  );
}

export default App;
