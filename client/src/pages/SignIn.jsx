import { Link } from "react-router-dom";

export default function SignIn() {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="p-3 max-w-sm mx-auto">
      <h1 className="text-3xl text-center font-semibold my-5">Sign In</h1>
      <form className="flex flex-col gap-2 mx-auto max-w-sm">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          className="p-3 rounded-lg outline-slate-500 focus:transition-all"
        />
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Password "
          className="p-3 rounded-lg outline-slate-500 focus:transition-all"
        />
        <button
        onSubmit={handleSubmit}
          type="submit"
          className="bg-green-400 p-3 rounded-2xl font-medium disabled:bg-opacity-50 disabled:bg-green-400 hover:bg-green-500 transition-all">
          Login
        </button>
      </form>
      <div className="flex gap-1 mx-auto my-2 max-w-sm">
        <p>Dont you have an account?</p>{" "}
        <Link to={"/signup"}>
        <span className="text-purple-600 hover:underline hover:cursor-pointer">Sign Up!</span>
        </Link>
      </div>
    </div>
  );
}
