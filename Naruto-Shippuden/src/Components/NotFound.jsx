import React from "react";
import { Link } from "react-router-dom";
 function NotFound() {
    return (
        <div className="container text-center mx-auto p-7">
            <h1 className="font-bold text-4xl mb-4">404 - Page Not Found</h1>
            <P className="font-italic font-lg">Sorry the page your looking for doesn't exist.</P>
            <Link to="/" className="hover:underline text-blue-600" />

        </div>
    );
 }

 export default NotFound;