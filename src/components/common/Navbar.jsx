import {Link} from "wouter";
import {useMutation} from "@tanstack/react-query";

import useAuth from "../../hooks/useAuth.js";

function Navbar() {
  const {pbClient, onLogout} = useAuth();

  const logoutMutation = useMutation({
    mutationFn: () => {
      return onLogout();
    }
  })

  return (
      <div className="navbar bg-base-200">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Car Buddy</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li><a><Link to={"/"}>Home</Link></a></li>
            {!pbClient.authStore.model && (
              <li><a><Link to={"/Login"}>Login</Link></a></li>
            )}
            {pbClient.authStore.model && (
                <li><button onClick={() => logoutMutation.mutate()}>Logout</button></li>
            )}
          </ul>
        </div>
      </div>
  );
}

export default Navbar;