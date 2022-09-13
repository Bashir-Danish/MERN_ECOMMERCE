import "./App.css";
import Home from "./pages/Home";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Wish from "./pages/Wish";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
function App() {
   return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/wish" element={<Wish/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/account" element={<Account/>}/>
          </Routes>
        </Router>
      </>
   );
}

export default App;
