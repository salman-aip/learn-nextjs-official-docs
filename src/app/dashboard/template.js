export default function DashboardTemplate({ children }) {
  return (
    <div className="w-full h-[calc(100vh_-_80px)] bg-blue-400">
      <div>Template Page For Dashboard</div>
      {children}
    </div>
  );
}
