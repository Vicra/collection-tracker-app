import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./common/Navbar";
import AddCollectionItem from "./pages/AddCollectionItem";

import "./App.css";
import ListCollectionItems from "./pages/ListCollectionItems";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/add" element={<AddCollectionItem />} />
          <Route path="/" element={<ListCollectionItems />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
