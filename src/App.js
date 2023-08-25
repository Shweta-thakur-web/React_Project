import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import About from './Component/About';
import Industry from './Component/Industry';
import Footer from './Component/Footer';
import Coverage from './Component/Coverage';
import Conatct from './Component/Conatct'
import Joinpanel from './Component/Joinpanel';
import Industry2 from './Component/Industry2';
import Qualitative from './Component/Qualitative';
import Quantative from './Component/Quantative';
import Otherservices from './Component/OtherService';



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/industry2" element={<Industry2 />}></Route>
        {/* <Route path="/Industry" element={<Industry />}></Route> */}
        <Route path="/coverage" element={<Coverage />}></Route>
        <Route path="/contact" element={<Conatct />}></Route>
        <Route path="/joinpanel" element={<Joinpanel/>}></Route>
        <Route path="/qualitative" element={<Qualitative />}></Route>
        <Route path="/quantitative" element={<Quantative />}></Route>
        <Route path="/otherservices" element={<Otherservices />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
