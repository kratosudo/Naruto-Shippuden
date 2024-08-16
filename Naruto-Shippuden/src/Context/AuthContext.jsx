import React, { createContext, useContext, useState } from "react";
 

export const AuthContext =React.createContext();

export function AuthProvider ({children}) {
    const [user, setUser] = useState(null);

    return (
        <AuthContext value={{user, setUser}}>{children}
        </AuthContext>
    );
}

export default AuthContext;

