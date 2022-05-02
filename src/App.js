import logo from './logo.svg';
import './App.css';
import Header from './Pages/SharedPages/Header/Header';
import Footer from './Pages/SharedPages/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
        <Route path='/' element={<Home></Home>}></Route>
     </Routes>
     <Footer></Footer>


      {/* <p>
      driving a motorrcycle is like flying

Find the Best Motorbike Parts For Your Vehicle

motor mania
      </p> */}
    </div>
  );
}

export default App;
