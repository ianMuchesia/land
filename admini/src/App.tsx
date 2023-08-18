import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Loader } from "./components";
import Dashboard from "./scenes/dashboard";
import Properties from "./scenes/properties";
import Customers from "./scenes/customers";
import Settings from "./scenes/settings";
import Profile from "./scenes/profile";
import { Login, MainLayout } from "./pages";
import Edit from "./scenes/edit";

function App() {

 
  return (
    <BrowserRouter>
      <Loader />

      <Routes>
        <Route path="/" element={<MainLayout children />}>
          <Route index element={<Dashboard />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/properties/:propertyID" element={<Edit/>} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
