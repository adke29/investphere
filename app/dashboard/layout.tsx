import SideNav from "@/app/ui/dashboard/sidenav";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <SideNav />
      <div className="flex-grow p-6">
        {children}
      </div>
    </div>
  );
}
export default layout;
