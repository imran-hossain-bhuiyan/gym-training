
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import CheckOut from './Pages/CheckOut/CheckOut';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home />}></Route>
       <Route path='/home' element={<Home />}></Route>
       <Route path="/checkout" element={<CheckOut />}></Route>
       
     </Routes>
    </div>
  );
}

export default App;
