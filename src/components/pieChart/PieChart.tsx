import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import "./pie-chars.scss";
import data from "../../mock/pie-chart-data";

const PieChartBox = () => {
  return (
    <div className="pie-chart-wrapper">
      <h2>Leads by Source</h2>
      <ResponsiveContainer width="99%" height={300}>
        <PieChart>
          <Tooltip
            contentStyle={{ background: "#fff", borderRadius: "10px" }}
          />
          <Pie
            data={data}
            innerRadius={"70%"}
            outerRadius={"90%"}
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
