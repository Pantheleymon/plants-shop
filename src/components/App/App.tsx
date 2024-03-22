import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";

function App() {
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
