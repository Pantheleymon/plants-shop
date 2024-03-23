import { Routes, Route } from "react-router-dom";
import { FC } from "react";

import Header from "../Header/Header";
import Banner from "../Banner/Banner";

const App:FC = () => {
  return (
    <main className="container mx-auto">
        <Header/>
        <Routes>
            <Route path="/" element={<Banner/>}/>
        </Routes>
    </main>
  );
}

export default App;