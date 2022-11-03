import {Link} from "wouter";

import useAuth from "../hooks/useAuth.js";

function Home() {
  const {pbClient} = useAuth();
  console.log(pbClient.authStore.token);
  return (
      <>
        <h1>Welcome to Car Buddy</h1>
        <br />
        <Link to={"/login"}>Login</Link>
      </>
  );
}

export default Home;