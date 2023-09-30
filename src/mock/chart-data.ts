import { faker } from "@faker-js/faker";
import { IconType } from "react-icons";
import { BiSolidUserBadge } from "react-icons/bi";

type dayData = {
  name: string;
  users: number;
};

export interface chartUserData {
  color: string;
  icon: IconType;
  number: number | string;
  dataKey: string;
  percentage: number;
  chartData: dayData[];
}

const chartUser: chartUserData[] = new Array(4).fill({}).map(() => ({
  color: faker.color.rgb({ casing: "upper" }),
  icon: BiSolidUserBadge,
  number:
    Math.random() < 0.5
      ? faker.datatype.number({ min: 1, max: 100 })
      : faker.datatype.number({ min: 0, max: 100, precision: 0.01 }),
  dataKey: "users",
  percentage: faker.number.int({ min: -100, max: 100 }),
  chartData: [
    { name: "Sun", users: faker.number.int(100) },
    { name: "Mon", users: faker.number.int(100) },
    { name: "Tue", users: faker.number.int(100) },
    { name: "Wed", users: faker.number.int(100) },
    { name: "Thu", users: faker.number.int(100) },
    { name: "Fri", users: faker.number.int(100) },
    { name: "Sat", users: faker.number.int(100) },
  ],
}));

export const barChartData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default chartUser;
