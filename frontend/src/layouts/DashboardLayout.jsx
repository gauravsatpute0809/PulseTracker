import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";

function DashboardLayout({ children }) {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen">

        {/* Top Navigation */}
        <DashboardNavbar />

        {/* Main Content */}
        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;