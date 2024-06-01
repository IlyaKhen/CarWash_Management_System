import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import AppBar from "./components/AppBar";

const App: React.FC = () => {
  return (
    <div>
      <AppBar />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default App;
