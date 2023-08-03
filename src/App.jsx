import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Dashboard from "./pages/dashboard/Dashboard";
import "./index.css";
import Team from "./pages/team/Team";
import Contacts from "./pages/contacts/Contacts";
import Invoices from "./pages/invoices/Invoices";
import ProfileForm from "./pages/profileForm/ProfileForm";
import Calendar from "./pages/calendar/Calendar";
import FAQ from "./pages/faq/Faq";
import BarPage from "./pages/barPage/BarPage";
import PieChartPage from "./pages/pieChartPage/PieChartPage";
import LineChartPage from "./pages/lineChartPage/LineChartPage";
import GeographyPage from "./pages/geographyChartPage/GeographyChartPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/form" element={<ProfileForm />} />
      <Route path="/bar" element={<BarPage />} />
      <Route path="/pie" element={<PieChartPage />} />
      <Route path="/line" element={<LineChartPage />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/geography" element={<GeographyPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
