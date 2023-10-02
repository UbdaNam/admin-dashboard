import { faker } from "@faker-js/faker";
import { IconType } from "react-icons";
import { BiSolidUserBadge } from "react-icons/bi";

type dayDataType = {
  name: string;
  users: number;
};

type barChartDayDataType = {
  name: string;
  profit?: number;
  visit?: number;
};

export interface chartUserDataType {
  color: string;
  icon: IconType;
  number: number | string;
  dataKey: string;
  percentage: number;
  chartData: dayDataType[];
}

export interface barChartDataType {
  title: string;
  color: string;
  dataKey: string;
  chartData: barChartDayDataType[];
}

const chartUser: chartUserDataType[] = new Array(4).fill({}).map(() => ({
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

export const barChartRevenueData: barChartDataType = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: faker.datatype.number({ min: 1000, max: 9999 }),
    },
    {
      name: "Mon",
      profit: faker.datatype.number({ min: 1000, max: 9999 }),
    },
    {
      name: "Tue",
      profit: faker.datatype.number({ min: 1000, max: 9999 }),
    },
    {
      name: "Wed",
      profit: faker.datatype.number({ min: 1000, max: 9999 }),
    },
    {
      name: "Thu",
      profit: faker.datatype.number({ min: 1000, max: 9999 }),
    },
    {
      name: "Fri",
      profit: faker.datatype.number({ min: 1000, max: 9999 }),
    },
    {
      name: "Sat",
      profit: faker.datatype.number({ min: 1000, max: 9999 }),
    },
  ],
};

export const barChartVisitData: barChartDataType = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: faker.datatype.number({ min: 1000, max: 9999 }),
    },
    {
      name: "Mon",
      visit: faker.datatype.number({ min: 1000, max: 9999 }),
    },
    {
      name: "Tue",
      visit: faker.datatype.number({ min: 1000, max: 9999 }),
    },
    {
      name: "Wed",
      visit: faker.datatype.number({ min: 1000, max: 9999 }),
    },
    {
      name: "Thu",
      visit: faker.datatype.number({ min: 1000, max: 9999 }),
    },
    {
      name: "Fri",
      visit: faker.datatype.number({ min: 1000, max: 9999 }),
    },
    {
      name: "Sat",
      visit: faker.datatype.number({ min: 1000, max: 9999 }),
    },
  ],
};

export default chartUser;
