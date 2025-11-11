import React, { useState, useEffect } from "react";

const Auth = ({ closeAuth }) => {
    const [mode, setMode] = useState("login"); 
    const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
    });

  // This will store logged-in user after GET /profile
    const [profile, setProfile] = useState(null);

  // Handle input change
    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    };

  // SIGNUP -> POST /signup
    const handleSignUp = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", 
        body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
        alert(`Account created Successfully!. Welcome, ${data.name}`);
        setMode('login');
    }
    alert(data.message);
    };

  // LOGIN -> POST /login
    const handleLogin = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
    });
    // After login, fetch profile
    getProfile();
    };

  // FORGOT PASSWORD -> POST /forgot-password
    const handleForgot = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email: form.email }),
    });
    };

  // CHECK PROFILE IF LOGGED IN -> GET /profile
    const getProfile = async () => {
    const res = await fetch("http://localhost:5000/profile", {
        method: "GET",
        credentials: "include"
    });
    const data = await res.json();
    setProfile(data);
    };

  // auto-check profile on mount
    useEffect(() => {
    getProfile();
        }, []);

    return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50">
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50">
        <button
        className="absolute top-3 right-3 text-xl text-gray-500" onClick={closeAuth}> ×
        </button>

        {/* PROFILE VIEW */}
        {profile && (
            <div className="mb-6 text-center bg-orange-500">
            <h2 className="text-xl font-bold text-orange-500 ">Welcome Back {profile.name}</h2>
            </div>
        )}

        {/* LOGIN FORM */}
        {mode === "login" && (
            <>
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

            <form onSubmit={handleLogin}>
                <input
                type="email" name="email" placeholder="Email" className="w-full p-3 border rounded mb-4"
                onChange={handleChange}/>
                <input
                type="password" name="password" placeholder="Password" className="w-full p-3 border rounded mb-6" onChange={handleChange}/>

                <button type="submit" className="w-full bg-black text-white p-3 rounded mb-4">
                Login
                </button>
            </form>

            <p
                className="text-sm text-center text-blue-600 cursor-pointer"
                onClick={() => setMode("forgot")}
            >
                Forgot password?
            </p>

            <p className="text-center mt-4 text-sm">
                Don't have an account?{" "}
                <span className="text-blue-600 cursor-pointer" onClick={() => setMode("signup")}>
                Sign up
                </span>
            </p>
            </>
        )}

        {/* SIGNUP FORM */}
        {mode === "signup" && (
            <>
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

            <form onSubmit={handleSignUp}>
                <input type="text" name="name" placeholder="name" className="w-full p-3 border rounded mb-4" onChange={handleChange}/>

                <input type="email" name="email"
                placeholder="Email" className="w-full p-3 border rounded mb-4"
                onChange={handleChange}/>

                <input type="password" name="password" placeholder="Password" className="w-full p-3 border rounded mb-6"
                onChange={handleChange}/>

                <button type="submit" className="w-full bg-black text-white p-3 rounded mb-4 pointer-events-auto">
                Sign Up
                </button>
            </form>

            <p className="text-center mt-4 text-sm">
                Already have an account?{" "}
                <span className="text-blue-600 cursor-pointer" onClick={() => setMode("login")}>
                Login
                </span>
            </p>
            </>
        )}

        {/* FORGOT PASSWORD FORM */}
        {mode === "forgot" && (
        <>
            <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>

            <form onSubmit={handleForgot}>
            <input type="email" name="email" placeholder="Enter your email" className="w-full p-3 border rounded mb-6"
                onChange={handleChange}/>

                <button className="w-full bg-black text-white p-3 rounded mb-4">
                Send Reset Link
                </button>
            </form>

            <p className="text-center mt-4 text-sm">
                Remembered password?{" "}
                <span className="text-blue-600 cursor-pointer" onClick={() => setMode("login")}>
                    Login
                </span>
            </p>
            </>
        )}
        </div>
    </div>
    );
};

export default Auth;
