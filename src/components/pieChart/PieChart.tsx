import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import "./pie-chars.scss";

const PieChartBox = () => {
  const data = [
    { name: "Desktop", value: 400, color: "#0088fe" },
    { name: "Mobile", value: 300, color: "#00c49f" },
    { name: "Laptop", value: 300, color: "#ffbb28" },
    { name: "Tablet", value: 200, color: "#ff8042" },
  ];
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
