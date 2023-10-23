import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-sm mx-auto">
      <h1 className="text-3xl text-center font-semibold my-5">Sign Up</h1>
      <form className="flex flex-col gap-2 mx-auto max-w-sm">
        <input
          type="text"
          className="p-3 rounded-lg border outline-slate-400 focus:transition-all"
          placeholder="Username"
          id="username"
        />
        <input
          type="text"
          className="p-3 rounded-lg border outline-slate-400 focus:transition-all"
          placeholder="Email"
          id="email"
        />
        <input
          type="text"
          className="p-3 rounded-lg border outline-slate-400 focus:transition-all"
          placeholder="Password"
          id="password"
        />
        <button
          type="submit"
          className="bg-slate-400 p-3 rounded-2xl text-slate-100 font-medium hover:opacity-75 disabled:bg-red-400 disabled:opacity-100 transition-all">
          Sign Up
        </button>
      </form>
      <div className="flex gap-1 m-1">
        <p>Already have an account? </p>
        <Link to={"/signIn"}>
        <span className="text-blue-500">Sign In</span>
        </Link>
      </div>
    </div>
  );
}
