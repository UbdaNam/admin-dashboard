import { Link } from "react-router-dom";
import "./chart-box.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { chartUserData } from "../../mock/chart-data";

interface Props {
  chartData: chartUserData;
  title: string;
}

const ChartBox = ({ chartData, title }: Props) => {
  console.log(chartData);
  return (
    <div className="chart-box">
      <div className="box-info">
        <div className="title">
          {<chartData.icon fontSize={25} />}
          <span>{title}</span>
        </div>
        <h1>
          {title === "Total Revenue"
            ? `$${chartData.number}`
            : chartData.number}
        </h1>
        <Link to="/" style={{ color: chartData.color }}>
          View all
        </Link>
      </div>
      <div className="chart-info">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={chartData.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 15, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={chartData.dataKey}
                stroke={chartData.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: chartData.percentage > 0 ? "#32CD32" : "#FF6347" }}
          >
            {chartData.percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
