import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import SearchPage from "./SearchPage";
import { Route, Router, Routes } from "react-router-dom";
import SellPage from "./SellPage";
import FullPage from "./FullPage";
import { houseData } from "./data/house";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Home />
            </>
          }
        />
        <Route
          path="/search"
          element={
            <>
              <NavBar />
              <SearchPage />
            </>
          }
        />
        <Route
          path="/sell"
          element={
            <>
              <NavBar />
              <SellPage />
            </>
          }
        />
        <Route
          path="/:name"
          element={
            <>
              <NavBar />
              <FullPage />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
