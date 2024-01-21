import './App.css';
import Home from './pages/home';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import Product from './pages/prroduct';
import Cart from './pages/cart';
import About from './pages/about';
import{BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Profile from './pages/profile_page';


function App() {
  return (
    <div>
      <Header/>
      <Router>
      <Routes>
      <Route exact path ="/" element={<Home/>}></Route>
        <Route exact path ="/home" element={<Home/>}></Route>
        <Route exact path ="/login" element={<LoginPage/>}></Route>
        <Route exact path ="/signup" element={<SignupPage/>}></Route>
        <Route exact path ="/product" element={<Product/>}></Route>
        <Route exact path ="/cart" element={<Cart/>}></Route>
        <Route exact path ="/about" element={<About/>}></Route>
        <Route exact path ="/profile" element={<Profile/>}></Route>

      </Routes>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
