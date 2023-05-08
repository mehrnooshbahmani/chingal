import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router";
import {Login} from "./pages/auth/login";
import {AuthLayout} from "./layout/autLayout";
import {DashboardLayout} from "./layout/dashboardLayout";
import {Home} from "./pages/dashboard/home";
import {Users} from "./pages/dashboard/users";
import {EditUser} from "./pages/dashboard/users/edit";
import { PrivateWrapper } from "./utilities/appGuard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="" element={<Login />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route
            path=""
            element={
              <PrivateWrapper>
                <Home />
              </PrivateWrapper>
            }
          />
          <Route path="users">
            <Route
              path=""
              element={
                <PrivateWrapper>
                  <Users />
                </PrivateWrapper>
              }
            />
            <Route
              path="edit/:id"
              element={
                <PrivateWrapper>
                  <EditUser />
                </PrivateWrapper>
              }
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
