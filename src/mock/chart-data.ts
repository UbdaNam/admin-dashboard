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

export default chartUser;
