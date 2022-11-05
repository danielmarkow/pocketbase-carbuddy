import {Link} from "wouter";

import useAuth from "../hooks/useAuth.js";

function Home() {
  const {pbClient, onLogout} = useAuth();

  return (
      <>
        <h1>Welcome to Car Buddy</h1>
        <br />
        <Link to={"/login"}>Login</Link>
        < br/>
        <button onClick={onLogout}>Logout</button>
        < br/>
        {JSON.stringify(pbClient.authStore.model)}
        <button onClick={() => window.location.reload()}>refresh</button>
      </>
  );
}

export default Home;