import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./common/Navbar";
import AddCollectionItem from "./pages/AddCollectionItem";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/add" element={<AddCollectionItem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
