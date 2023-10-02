import { ResponsiveContainer, BarChart, Bar, Tooltip } from "recharts";
import { barChartDataType } from "../../mock/chart-data";
import "./bar-chart.scss";

const BarChartBox = ({ chartData }: { chartData: barChartDataType }) => {
  return (
    <div className="bar-chart-wrappper">
      <h2>{chartData.title}</h2>
      <div className="bar-chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={chartData.chartData}>
            <Tooltip
              contentStyle={{
                backgroundColor: "#2a3447",
                borderRadius: "8px",
                border: "none",
              }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={chartData.dataKey} fill={chartData.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
