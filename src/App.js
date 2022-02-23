import './App.css';
import React from 'react';
import Login from './pages/Auth/Login'
import ForgotPassword from './pages/Auth/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import Dashboard from './pages/Admin/Dashboard/index';
import Home from './component/home';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import DataArtikel from './pages/Admin/DataArtikel/index';
import TambahArtikel from './pages/Admin/DataArtikel/TambahArtikel';
import EditArtikel from './pages/Admin/DataArtikel/EditArtikel';

import JumlahPenduduk from './pages/Admin/JumlahPenduduk/index';
import EditJumlahPenduduk from './pages/Admin/JumlahPenduduk/EditJumlahPenduduk';

import DataKegiatan from './pages/Admin/DataKegiatan/index';
import TambahKegiatan from './pages/Admin/DataKegiatan/TambahKegiatan';
import EditKegiatan from './pages/Admin/DataKegiatan/EditKegiatan';

function App() {
  return (
    <Routes>
      <Route path="/home" element={ <Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/resetpassword/:token" element={<ResetPassword/>} />
      <Route
        path="/dashboard"
        element={
          // <ProtectRoute>
          //   <Dashboard />
          // </ProtectRoute>
          <Dashboard/>
        } />
      <Route path='/artikel' element={<DataArtikel />} />
      <Route path='/tambahartikel' element={<TambahArtikel />} />
      <Route path='/editartikel/:id' element={<EditArtikel />} />

      <Route path='/jumlahpenduduk' element={<JumlahPenduduk />} />
      <Route path='/editjumlahpenduduk/:id' element={<EditJumlahPenduduk />} />

      <Route path='/kegiatan' element={<DataKegiatan />} />
      <Route path='/tambahkegiatan' element={<TambahKegiatan />} />
      <Route path='/editkegiatan/:id' element={<EditKegiatan />} />

      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="*" element={<Navigate replace to="/home" />} />
    </Routes>
  );
}

export default App;
