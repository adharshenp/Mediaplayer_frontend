import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Landingpage from './pages/Landingpage';
import Watchhistory from './pages/Watchhistory';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       
       <Header/>
       <Routes>
  <Route path='/' element={<Landingpage/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/watch-history' element={<Watchhistory/>}/>

</Routes>
<Footer/>
       

    </div>
  );
}

export default App;
