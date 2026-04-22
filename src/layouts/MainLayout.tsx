import { Outlet } from "react-router-dom";
import { Header } from "../layouts/Header/Header";
import { Footer } from "../layouts/footer/Footer";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};