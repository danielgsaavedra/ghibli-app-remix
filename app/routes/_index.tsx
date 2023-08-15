import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="text-black text-center font-bold py-5">
      <h1>Welcome to Remix</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link to="/films">Go to Films</Link>
      </button>
    </div>
  );
}
