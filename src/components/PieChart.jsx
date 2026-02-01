import { PieChart, Pie } from "recharts";
import pieData from "../data/piedata";

const PieChartComponent = () => {
  return (
    <PieChart width={220} height={220}>
      <Pie
        data={pieData}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={70}
        outerRadius={90}
      />
    </PieChart>
  );
};

export default PieChartComponent;
