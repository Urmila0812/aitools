import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/home';
import Contact from './Pages/Contact/contact'
import NavBar from './Components/Navbar/navbar';
import Training from './Pages/Training/training';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="training" element={<Training />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
