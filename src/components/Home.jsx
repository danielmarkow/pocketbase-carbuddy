import { Link } from "react-router-dom";

import useAuth from "../hooks/useAuth.js";
import {useEffect} from "react";

function Home() {
  const {pbClient, onLogout} = useAuth();

  useEffect(() => {
    console.log(document.referrer)
  })


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