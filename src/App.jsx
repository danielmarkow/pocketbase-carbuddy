import {Route} from "wouter";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import AuthProvider from "./context/AuthProvider.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Navbar from "./components/common/Navbar.jsx";

import './App.css'

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Navbar />
        <br />
        <div className="flex w-full">
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
        </div>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
