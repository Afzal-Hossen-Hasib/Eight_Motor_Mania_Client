import './App.css';
import Header from './Pages/SharedPages/Header/Header';
import Footer from './Pages/SharedPages/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Blog from './Pages/SharedPages/Blog/Blog';
import Login from './Pages/Login/Login/Login';
import ErrorPage from './Pages/SharedPages/ErrorPage/ErrorPage';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import UpdateInventory from './Pages/UpdateInventory/UpdateInventory';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ManageItem from './Pages/ManageItem/ManageItem';
import MyItem from './Pages/MyItem/MyItem';
import AddItem from './Pages/AddItem/AddItem';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/inventory/:id' element={
            <PrivateRoute>
              <UpdateInventory></UpdateInventory>
            </PrivateRoute>
        }></Route> 
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        {/* <Route path='/register' element={<UserSignUp></UserSignUp>}></Route> */}
        <Route path='/manageinventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/manageitem' element={<ManageItem></ManageItem>}></Route>
        <Route path='/myitem' element={<MyItem></MyItem>}></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
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
