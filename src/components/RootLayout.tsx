import Header from "./Header";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <>
      <Header />
      <div className="py-4 bg-base-100">
        <section className="max-w-3xl mx-auto ">
          <Outlet />
        </section>
      </div>
    </>
  );
};
