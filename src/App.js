import logo from './logo.svg';
import './App.css';
import Header from './Pages/SharedPages/Header/Header';
import Footer from './Pages/SharedPages/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Blog from './Pages/SharedPages/Blog/Blog';
import Login from './Pages/Login/Login/Login';
import ErrorPage from './Pages/SharedPages/ErrorPage/ErrorPage';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        {/* <Route path='/register' element={<UserSignUp></UserSignUp>}></Route> */}
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
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
