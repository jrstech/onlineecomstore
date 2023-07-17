import "./App.css";
import FooterComponent from "./component/FooterComponent";
import Nav from "./component/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./component/SignUp";
import PrivateComponent from "./component/PrivateComponent";
import LoginComponent from "./component/LoginComponent";
import AddProduct from "./component/AddProduct";
import ProductList from "./component/ProductList";
import { Input } from "reactstrap";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div >
          <h3 className="headername d-flex"  > E-Commorce Dashbord
          <Input className="w-50 m-2" type="text" placeholder="Search" />
        </h3>
       

        </div>

        
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/addproductlisting" element={<AddProduct/>} />
            <Route path="/productlist" element={<ProductList/>} />
            <Route path="/update" element={<h1>Update Product Component</h1>} />
            <Route path="/profile" element={<h1>Profile Component</h1>} />
            <Route path="/logout" element={<h1>Logout Component</h1>} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginComponent />} />
        </Routes>
      </BrowserRouter>
      <FooterComponent />
    </div>
  );
}

export default App;
