import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Compopents/About/About";
import Header from "./Compopents/Header/Header";
import Inventory from "./Compopents/Inventory/Inventory";
import Orders from "./Compopents/Orders/Orders";
import Shop from "./Compopents/Shop/Shop";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shopping" element={<Shop></Shop>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
