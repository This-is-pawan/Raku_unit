import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { GiTowTruck } from "react-icons/gi";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Register_handle = (e) => {
    e.preventDefault();
    console.log("submit form", name, email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-200 to-orange-300">

      <form
        onSubmit={Register_handle}
        className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg text-center"
      >

        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-pink-600 font-bold text-xl">Raku</span>
          <GiTowTruck className="text-3xl" />
        </div>

        <h1 className="text-2xl font-semibold mb-6">Create Account</h1>

        <input
          type="text"
          value={name}
          className="w-full border p-3 mb-4 rounded-lg"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          value={email}
          className="w-full border p-3 mb-4 rounded-lg"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          value={password}
          className="w-full border p-3 mb-4 rounded-lg"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition"
        >
          Register
        </button>

        <p className="text-sm my-4">OR</p>

        <button
          type="button"
          className="w-full border p-3 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-100"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <p className="text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 underline">
            Login
          </Link>
        </p>

      </form>
    </div>
  );
};

export default Register;