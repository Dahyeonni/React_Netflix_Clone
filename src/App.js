import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './api/requests';
import Footer from './components/Footer';
import { Outlet, Route, Routes } from "react-router-dom";

import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";



const Layout = () => {
  return (
    <div>
      <Nav />

      <Outlet />
     
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" element={<SearchPage />} />

        </Route>
      </Routes>
    </div>
  );
}
