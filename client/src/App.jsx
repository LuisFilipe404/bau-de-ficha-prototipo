import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'

// Importação de Páginas

import Main from '../Components/Main';
import Dados from '../Components/Dados/D6';
import Create from '../Components/Create';
import View from '../Components/View';

// Importação dos Layouts

import NavBar from '../Layout/NavBar';
import Redirect from '../Components/Redirect';



function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route path="/d6" element={<Dados/>}/>
        <Route path="/criarficha" element={<Create/>}/>
        <Route path="/view" element={<View/>}/>
        <Route path="/redirect" element={<Redirect/>}/>
      </Routes>
    </Router>
  )
}

export default App
