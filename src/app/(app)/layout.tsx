import Footer from "@/components/Footer";
import Header from "@/components/header/Header";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="bg-gray-100 pb-3">
        <div className="flex flex-col gap-12 px-4 py-6 lg:container sm:px-8 sm:py-12">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
export default AppLayout;
