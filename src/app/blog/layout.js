export default function DynamicRouteLayout({ children }) {
  return (
    <div className="bg-yellow-600">
      <div>Dynamic Route</div>
      {children}
    </div>
  );
}
