import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Adopsi from "./pages/Adopsi";
import AdopsiDetail from "./pages/AdopsiDetail";
import AdopsiForm from "./pages/AdopsiForm";
import Artikel from "./pages/Artikel";
import Donasi from "./pages/Donasi";
import Sukarelawan from "./pages/Sukarelawan";
import Kontak from "./pages/Kontak";
import Komunitas from "./pages/Komunitas";
import Comment from "./components/Comment";
import Login from "./auth/Login";
import Register from "./auth/Register";
import UserProfil from "./pages/UserProfil";
import PrivateRoutes from "./components/PrivateRoutes";
import PublicRoutes from "./components/PublicRoutes";
import { AuthProvider } from "./auth/AuthContext";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<UserProfil />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Beranda />} />
            <Route path="/adopsi" element={<Adopsi />} />
            <Route path="/adopsi/:id" element={<AdopsiDetail />} />
            <Route path="/tambah-adopsi" element={<AdopsiForm />} />
            <Route path="/artikel" element={<Artikel />} />
            <Route path="/donasi" element={<Donasi />} />
            <Route path="/sukarelawan" element={<Sukarelawan />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/komunitas" element={<Komunitas />} />
            <Route path="/id:comment" element={<Comment />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
