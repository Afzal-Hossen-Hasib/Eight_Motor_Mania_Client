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
import { ToastContainer } from 'react-toastify';

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
        <Route path='/manageinventory' element={
          <PrivateRoute>
            <ManageInventory></ManageInventory>
          </PrivateRoute>
        }></Route>
        <Route path='/manageitem' element={
          <PrivateRoute>
            <ManageItem></ManageItem>
          </PrivateRoute>
        }></Route>
        <Route path='/myitem' element={
          <PrivateRoute>
            <MyItem></MyItem>
          </PrivateRoute>
        }></Route>
        <Route path='/additem' element={
          <PrivateRoute>
            <AddItem></AddItem>
          </PrivateRoute>
        }></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
     </Routes>
     <Footer></Footer>
     <ToastContainer />


      {/* <p>
      driving a motorrcycle is like flying

Find the Best Motorbike Parts For Your Vehicle

motor mania
      </p> */}
    </div>
  );
}

export default App;
