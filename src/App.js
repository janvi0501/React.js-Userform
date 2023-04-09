import logo from "./logo.svg";
import "./App.css";
import Ragistartion from "./Ragistartion";
import Login from "./Login";
import Noticeboard from "./Noticeboard";
import Dashboard from "./Dashboard";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route path="/ragistartion" element={<Ragistartion />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/" element={<Noticeboard />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
