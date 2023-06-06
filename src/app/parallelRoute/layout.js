export default function ParallelLayout(props) {
  const isAuth = true;
  const admin = props.admin;
  const operator = props.operator;
  const user = props.user;

  return (
    <div className="w-full min-h-[100vh] bg-white text-black">
      <h1 className="bg-blue-400 text-center">Parallel Route Layout</h1>
      {props.children}

      <div className="flex justify-between items-center p-12">
        {props.admin}

        {props.operator}
      </div>

      {/* conditionally parallel route */}
      <div>
        Conditionally parallel route
        {isAuth ? admin : operator}
      </div>

      {/* UnMatch Route */}
      <div className="bg-red-500 text-center p-12 mt-12">{props.user}</div>
    </div>
  );
}
