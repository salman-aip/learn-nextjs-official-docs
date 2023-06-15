export default function LayoutInterception({ children, modal }) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
