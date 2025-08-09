import DashboardHeader from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white">
      <div className="fixed top-0 left-0 w-[18%] transition-all duration-300 h-full z-10 sidebar">
        <Sidebar />
      </div>
      <div className="fixed top-0 right-0 w-[82%] z-10 bg-white">
        <DashboardHeader />
      </div>
      <div className="h-full my-30 md:ml-68 px-10">{children}</div>
    </div>
  );
}
