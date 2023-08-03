import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

export default function Topbar() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#b4ff00",
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="search"></InputBase>
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
    // <header>
    //   <Link className="site-logo" to="/">
    //     #VanLife
    //   </Link>
    //   <nav>
    //     <NavLink to="host" style={({ isActive }) => (isActive ? activeStyles : null)}>
    //       Host
    //     </NavLink>
    //     <NavLink to="about" style={({ isActive }) => (isActive ? activeStyles : null)}>
    //       About
    //     </NavLink>
    //     <NavLink to="vans" style={({ isActive }) => (isActive ? activeStyles : null)}>
    //       Vans
    //     </NavLink>

    //     <button type="button" onClick={() => localStorage.removeItem("loggedin")}>
    //       X
    //     </button>
    //   </nav>
    // </header>
  );
}
