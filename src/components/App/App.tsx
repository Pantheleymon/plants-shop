import { Routes, Route } from "react-router-dom";
import { FC } from "react";

import Header from "../Header/Header";

import Main from "../../pages/Main";
import Products from "../../pages/Products";

const App:FC = () => {
  return (
    <main className="container mx-auto">
        <Header/>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/products" element={<Products/>}/>
        </Routes>
    </main>
  );
}

export default App;