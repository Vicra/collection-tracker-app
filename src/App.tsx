import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./common/Navbar";
import AddCollectionItem from "./pages/AddCollectionItem";

import "./App.css";
import TabCollections from "./pages/TabCollections/TabCollections";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/add" element={<AddCollectionItem />} />
          <Route path="/" element={<TabCollections />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
