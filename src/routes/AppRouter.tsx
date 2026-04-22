import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import  About  from "../pages/About/About";
import Academics from "../pages/Academics/Academics";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout Route */}
        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}