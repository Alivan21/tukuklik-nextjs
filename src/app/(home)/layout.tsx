import { Fragment } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/header/Navbar";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <header className="container fixed top-0 z-20 mx-auto min-w-full bg-white">
        <Navbar />
      </header>
      <main className="bg-gray-100">{children}</main>
      <Footer />
    </Fragment>
  );
}
