import React, { useState} from "react";
import { Link } from "react-router-dom";
import { auth } from "src/Context/Authcontext.jsx";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSignup = async (e) => {
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth, email, password);
            setEmail("");
            setPassword("")

        }catch (error) {
            setError(error.message);
        }
    };


    return (
      <div className="flex justify-center items-center min-h-screen ">
        <form onSubmit={handleSignup} className="bg-white p-6 rounded-md">
          <h2 className="font-bold mb-4">Sign Up</h2>
          {error && <P className="text-red-600 mb-4">{error}</P>}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border p-2 mb-4"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border p-2 mb-4"
          />

          <button type="submit" className="bg-slate-800 text-white py-2 rounded-md px-4"></button> <br/>

          <span>
            Already have an account <Link to="/login">login</Link>
          </span>
        </form>
      </div>
    );
    
}





export default Signup;