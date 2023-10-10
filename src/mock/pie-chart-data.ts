export type PieChartDataType = {
  name: string;
  value: number;
  color: string;
};

const data: PieChartDataType[] = [
  { name: "Desktop", value: 400, color: "#0088fe" },
  { name: "Mobile", value: 300, color: "#00c49f" },
  { name: "Laptop", value: 300, color: "#ffbb28" },
  { name: "Tablet", value: 200, color: "#ff8042" },
];

export default data;
