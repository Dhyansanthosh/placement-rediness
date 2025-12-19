import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import DsaProgress from "./pages/DsaProgress";
import Mocks from "./pages/Mocks";
import Activity from "./pages/Activity";
import { Navigate } from "react-router-dom";
import UpdateProgress from "./pages/UpdateProgress";
import AddMock from "./pages/AddMock";
import MockHistory from "./pages/MockHistory";
import MockChart from "./pages/MockChart";
import  Profiler  from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>}/>
        <Route path="/profile" element={<ProtectedRoute> <Profile /> </ProtectedRoute> }/>
        <Route path="/dsa" element={<ProtectedRoute> <DsaProgress /></ProtectedRoute> }/>
        <Route path="/mocks"element={<ProtectedRoute><Mocks /></ProtectedRoute>}/>
        <Route path="/activity"element={<ProtectedRoute><Activity /> </ProtectedRoute>}/>
        <Route path="update-progress" element={<ProtectedRoute><UpdateProgress/></ProtectedRoute>}/>
        <Route path="/add-mock"element={<ProtectedRoute><AddMock /></ProtectedRoute>}/>
        <Route path="/mock-history"element={  <ProtectedRoute> <MockHistory /> </ProtectedRoute>}/>
        <Route path="/mock-chart"element={<ProtectedRoute><MockChart /> </ProtectedRoute>}/>
        <Route path="/profile" element={<Profile />} />


        </Routes>
    </BrowserRouter>
  );
}

export default App;
