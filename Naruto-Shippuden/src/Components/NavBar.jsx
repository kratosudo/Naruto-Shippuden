import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";


function Navbar() {
    const { user } = 
    useContext(AuthContext);

    return (
        <nav className="p-4 text-white bg-gray-500">
            <div className="container mx-auto justify-between flex space-x-4">
                <Link to="/home" className="hover:underline">Home</Link>
                <Link to="/characters" className="hover:underline">
                Characters</Link>
                <Link to="/login" className="hover:underline">Login</Link>
                <Link to="/signup" className="hover:underline">Signup</Link>



            </div>




        </nav>


    )

    
}
export default Navbar;

