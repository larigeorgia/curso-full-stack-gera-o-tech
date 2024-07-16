// import './App.css'
// import Home from './pages/Home.jsx'
// import NavBar from './components/menu/NavBar.jsx'


// function App() {
//   return (
//     <>
//       <Home/>
//       <NavBar/>
//     </>
//   )
// }

// export default App

import './App.css'
import Navbar from './components/menu/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
// import Contato from './pages/Contato';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App
