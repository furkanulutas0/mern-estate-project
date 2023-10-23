import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signUp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!data.success) {
        console.log(data);
        setLoading(false);
        setError(data.message);
        return;
      }
      setSuccess(data.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="p-3 max-w-sm mx-auto">
      <h1 className="text-3xl text-center font-semibold my-5">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mx-auto max-w-sm">
        <input
          type="text"
          className="p-3 rounded-lg border outline-slate-400 focus:transition-all"
          placeholder="Username"
          id="username"
          onChange={handleChange}
        />
        <input
          type="text"
          className="p-3 rounded-lg border outline-slate-400 focus:transition-all"
          placeholder="Email"
          id="email"
          onChange={handleChange}
        />
        <input
          type="text"
          className="p-3 rounded-lg border outline-slate-400 focus:transition-all"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-slate-400 p-3 rounded-2xl text-slate-100 font-medium hover:opacity-75 disabled:bg-red-400 disabled:opacity-100 transition-all">
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <div className="flex gap-1 m-1">
        <p>Already have an account? </p>
        <Link to={"/signIn"}>
          <span className="text-blue-500">Sign In</span>
        </Link>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
    </div>
  );
}
