import {Link} from "wouter";

import useAuth from "../hooks/useAuth.js";
import {useMutation} from "@tanstack/react-query";

function Home() {
  const {pbClient, onLogout} = useAuth();

  const logoutMutation = useMutation({
    mutationFn: () => {
      return onLogout();
    }
  })

  return (
      <>
        <h1>Welcome to Car Buddy</h1>
        <br />
        {!pbClient.authStore.model && (
          <Link to={"/login"}>Login</Link>
        )}
        < br/>
        {pbClient.authStore.model && (
          <button onClick={() => logoutMutation.mutate()}>Logout</button>
        )}
        < br/>
        {JSON.stringify(pbClient.authStore.model)}
        {/*<button onClick={() => window.location.reload()}>refresh</button>*/}
      </>
  );
}

export default Home;