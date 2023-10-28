import {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log(formData)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signIn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;        
      }
      setError(null);
      setSuccess("Login Succecfull");
      setLoading(false);
      setTimeout(() => {
        navigate("/");
      }, 2000);
      navigate("/");
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };
  return (
    <div className="p-3 max-w-sm mx-auto">
      <h1 className="text-3xl text-center font-semibold my-5" >Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mx-auto max-w-sm">
        <input
          onChange={handleChange}
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          className="p-3 rounded-lg outline-slate-500 focus:transition-all"
        />
        <input
          onChange={handleChange}
          type="text"
          name="password"
          id="password"
          placeholder="Password "
          className="p-3 rounded-lg outline-slate-500 focus:transition-all"
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-green-400 p-3 rounded-2xl font-medium disabled:bg-opacity-50 disabled:bg-green-400 hover:bg-green-500 transition-all">
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="flex gap-1 mx-auto my-2 max-w-sm">
        <p>Dont you have an account?</p>{" "}
        <Link to={"/signup"}>
          <span className="text-purple-600 hover:underline hover:cursor-pointer">Sign Up!</span>
        </Link>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
    </div>
  );
}
