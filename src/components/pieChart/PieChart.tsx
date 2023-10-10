import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import "./pie-chars.scss";
import data from "../../mock/pie-chart-data";

const PieChartBox = () => {
  return (
    <div className="pie-chart-wrapper">
      <h2>Leads by Source</h2>
      <ResponsiveContainer width="99%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx={120}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((item) => (
              <Cell key={item.name} fill={item.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartBox;
