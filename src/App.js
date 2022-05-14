import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from './pages/Profile'
import AuthProvider from "./context/auth";
import PrivateRoute from "./components/PrivateRoute";
import { Fragment } from "react";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Fragment >
          <Routes>
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />

          </Routes>
        </Fragment>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;