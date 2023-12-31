import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/charts/PieChart";

const PieChartPage = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh" width="70%">
        <PieChart />
      </Box>
    </Box>
  );
};

export default PieChartPage;
