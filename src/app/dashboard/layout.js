export default function DashboardLayout({ children }) {
  return (
    <div className="w-full min-h-screen bg-white text-black">
      <div className="w-full h-auto mx-auto py-4 bg-orange-900">Layout Header</div>
      <div className="w-full h-[calc(100vh_-_56px)] flex">
        <div className="w-[300px] bg-fuchsia-900">Layout Sidebar</div>
        {children}
      </div>
    </div>
  );
}
