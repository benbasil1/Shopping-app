import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import AddProduct from './components/AddProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import Viewall from './components/Viewall';

function App() {
  return (
    <div >
       <Nav/>
       <BrowserRouter>
       <Routes>
       
        <Route path="/" element={<AddProduct/>}/>
        <Route path="Serch" element={<Search/>}/>
        <Route path="View" element={<Viewall/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
