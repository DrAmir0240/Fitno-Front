import "@/app/globals.css";
import MobileMenu from "../organisms/clubPanel/MobileMenu";
import Header from "../organisms/clubPanel/Header";

export default function ClubPanelLayout({ children }) {
  return (
    <div>
      {/* Header */}
     

      <div className="mx-auto min-h-screen  px-5 max-w-[700px] m-auto">
        <Header />
        <div className="flex gap-8">
          {/* Sidebar Navigation */}

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white rounded-lg p-6">{children}</div>
          </main>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </div>
  );
}
