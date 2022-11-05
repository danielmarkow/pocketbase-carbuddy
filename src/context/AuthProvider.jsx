import {useState} from "react";
import PocketBase from "pocketbase/cjs";

import {AuthContext} from "./AuthContext.js";

function AuthProvider({children}) {
  const client = new PocketBase("http://127.0.0.1:8090");

  const handleLogin = (email, password) => {
    return client.users.authViaEmail(email, password)
        // .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    client.authStore.clear();
  };

  // TODO add function to create new user (to be used in sign up form)

  const value = {
    pbClient: client,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
  );
};

export default AuthProvider;