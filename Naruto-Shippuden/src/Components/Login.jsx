import React, { useState} from "react";
import { Link } from "react-router-dom";
import { auth } from "src/firebase/config.js";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login  () {
    const [email, setEmail] =
     useState("");
     const [password, setPassword] =
     useState("");
     const [error, setError] =
     useState(null);

     const handleLogin = async (e) =>
     {
        e.preventDefault();
        try {
            await 
            signInWithEmailAndPassword(auth, email, password);
            setEmail("");
            setPassword('');
        } catch (error) {
            setError(error.message);
        }
     };

    return  (
        <div className="flex justify-center min-h-screen items-center">
        <form onSubmit={handleLogin} className="rounded-md bg-sky-500 p-6">
            <h2 className="font-bold mb-4">Login</h2>
            {error && <P className="text-red-600 mb-4">{error}</P>}
            <input
            type='email' value={email} onChange={(e) =>
                setEmail(e.target.value)} placeholder="Email" className="border p-2 mb-4"
            />
            <input 
            type="password" value={password} onChange={(e) =>
                setPassword(e.target.value)} placeholder="Password" className="border p-2 mb-4"
            />
            <button type="submit" className="bg-slate-800 rounded-md text-white py-2 px-4">Login
            </button> <br/>



            <span>Do not have an account <Link to="/signup">signup</Link></span>

        </form>
        </div>
    )
}
export default Login;