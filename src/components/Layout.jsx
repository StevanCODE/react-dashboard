import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./UI/Topbar";
import Footer from "./Footer";
import Sidebar from "./UI/Sidebar";
import { Box } from "@mui/material";

export default function Layout() {
  return (
    <Box display="flex" alignItems="flex-start" justifyContent="flex-start">
      <Sidebar />
      <Box display="flex" flexDirection={"column"} width="100%">
        <Topbar />
        <main className="content">
          <Outlet />
        </main>
      </Box>

      {/* <Footer /> */}
    </Box>
  );
}
