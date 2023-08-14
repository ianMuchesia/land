import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Loader } from "./components";
import Dashboard from "./scenes/dashboard";
import Properties from "./scenes/properties";
import Customers from "./scenes/customers";
import Settings from "./scenes/settings";
import Profile from "./scenes/profile";
import MainLayout from "./MainLayout";
import { useState } from "react";
import Login from "./Login";



function App() {
  const [ user, setUser] = useState(false)
  return (
    <BrowserRouter>
      <Loader />
      
              <Routes>
                <Route path="/" element={<MainLayout children/>}>
                <Route index element={
                
                user?
                <Dashboard />:<Navigate to="login"/>} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/customers" element={<Customers />} />
                
                <Route path="/settings" element={<Settings />} />
                </Route>
                <Route path="/login" element={<Login setUser={setUser} />} />
              </Routes>
            
            

    </BrowserRouter>
  );
}

export default App;
