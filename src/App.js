
import { Route, Routes } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import './App.scss';
import {Login} from './LoginPage/Login';
import {Form} from './Form/Form';
import {Home} from './HomeComponents/Home'; 
import { CardView } from './HomeComponents/CardView';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login/>}></Route>
          <Route path='/addPlace' element={<Form/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/cardView' element={ <CardView/>}></Route>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
