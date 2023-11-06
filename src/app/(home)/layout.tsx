import { Fragment } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/header/Navbar";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main className="bg-gray-100">{children}</main>
      <Footer />
    </Fragment>
  );
}
