import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/charts/BarChart";

const BarPage = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="90vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default BarPage;