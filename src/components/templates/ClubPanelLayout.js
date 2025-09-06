import "@/app/globals.css";
import MobileMenu from "../organisms/clubPanel/MobileMenu";
import Header from "../organisms/clubPanel/Header";
import Sidebar from "../organisms/clubPanel/Sidebar";

export default function ClubPanelLayout({ children }) {
  return (
    <div>

      <div className="mx-auto min-h-screen w-full   m-auto">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
    <Sidebar/>
          {/* Main Content */}
          <main className="flex-1">
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
