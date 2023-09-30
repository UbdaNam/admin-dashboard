import { ResponsiveContainer, BarChart, Bar, Tooltip } from "recharts";
import "./bar-chart.scss";
import { barChartData } from "../../mock/chart-data";

const BarChartBox = () => {
  return (
    <div className="bar-chart-wrappper">
      <h2>Title</h2>
      <div className="bar-chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={barChartData}>
            <Tooltip
              contentStyle={{
                backgroundColor: "#2a3447",
                borderRadius: "8px",
                border: "none",
              }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey="uv" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
