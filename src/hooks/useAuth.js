import {useContext} from "react";

import {AuthContext} from "../context/AuthContext.js";

function useAuth() {
  return useContext(AuthContext);
};

export default useAuth;