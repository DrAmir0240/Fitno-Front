import "@/app/globals.css";
import Header from "@/components/layout/clubPanel/Header";
import MobileMenu from "@/components/layout/clubPanel/MobileMenu";
import Sidebar from "@/components/layout/clubPanel/Sidebar";


export default function ClubPanelLayout({ children }) {
  return (
    <div>

      <div className="mx-auto min-h-screen w-full   m-auto">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
    <Sidebar/>
          {/* Main Content */}
          <main className="flex-1 max-w-[1200px] mx-auto">
          <Header />
            <div className="bg-white rounded-lg p-6">{children}</div>
          </main>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </div>
  );
}
