import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";

function DashboardLayout({ children }) {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen">

        <TopNavbar />

        <main className="p-8">

          {children}

        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;