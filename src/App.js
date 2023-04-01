
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Formemp } from './components/form/Formemp';


function App() {
  return (
    <div>
     <BrowserRouter basename='/EmployeeAppFrontend'>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/form' element={<Formemp/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
