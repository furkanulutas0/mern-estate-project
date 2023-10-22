import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-950">The</span>
            <span className="text-slate-500">MrSpy</span>
          </h1>
        </Link>
        <form action="" className="bg-slate-100 rounded-lg flex items-center p-3 ">
          <input
            type="text"
            className="bg-transparent outline-none w-24 sm:w-64"
            name="search-bar"
            id="search-bar"
            placeholder="Search.."
          />
          <FaSearch className="text-slate-500" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden p-2 cursor-pointer rounded-lg sm:inline text-slate-700 hover:bg-slate-500 hover:text-slate-100 transition-all">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden p-2 cursor-pointer rounded-lg sm:inline text-slate-700 hover:bg-slate-500 hover:text-slate-100 transition-all">
              About
            </li>
          </Link>
          <Link to= '/signIn'>
          <li className="hidden p-2 cursor-pointer rounded-lg sm:inline text-slate-700 hover:bg-slate-500 hover:text-slate-100 transition-all">
            Sign In
          </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
