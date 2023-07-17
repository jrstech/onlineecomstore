import "./App.css";
import FooterComponent from "./component/FooterComponent";
import Nav from "./component/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./component/SignUp";
import PrivateComponent from "./component/PrivateComponent";
import LoginComponent from "./component/LoginComponent";
import AddProduct from "./component/AddProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <h3> E-Commorce Dashbord</h3>
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/addproductlisting" element={<AddProduct/>} />
            <Route path="/productlist" element={<h1>Product listing</h1>} />
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
