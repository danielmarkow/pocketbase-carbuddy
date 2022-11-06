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
        <div className="grid h-40 flex-grow card bg-base-300 rounded-box place-items-center">
          <h1>Welcome to Car Buddy</h1>
          {/*<br />*/}
          {/*{!pbClient.authStore.model && (*/}
          {/*  <Link to={"/login"}>Login</Link>*/}
          {/*)}*/}
          {/*< br/>*/}
          {/*{pbClient.authStore.model && (*/}
          {/*  <button*/}
          {/*      className="btn btn-outline"*/}
          {/*      onClick={() => logoutMutation.mutate()}>Logout</button>*/}
          {/*)}*/}
          {/*< br/>*/}
          {/*{JSON.stringify(pbClient.authStore.model)}*/}
          {/*<button onClick={() => window.location.reload()}>refresh</button>*/}
        </div>
        <div className="grid h-40 flex-grow card bg-base-300 rounded-box place-items-center">
          <h1>Add new Buddies</h1>
        </div>
      </>
  );
}

export default Home;