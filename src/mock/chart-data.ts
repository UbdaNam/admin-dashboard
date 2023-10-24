import { faker } from '@faker-js/faker';
import { IconType } from 'react-icons';
import { BiSolidUserBadge } from 'react-icons/bi';

type DayDataType = {
  name: string;
  [key: string]: number | string;
};

type BarChartDayDataType = {
  name: string;
  profit?: number;
  visit?: number;
};

export interface ChartUserDataType {
  color: string;
  icon: IconType;
  number: number | string;
  dataKey: string;
  percentage: number;
  chartData: DayDataType[];
}

export interface BarChartDataType {
  title: string;
  color: string;
  dataKey: string;
  chartData: BarChartDayDataType[];
}

const data: string[] = ['Users', 'Products', 'Ratio', 'Revenue'];

const chartUser: ChartUserDataType[] = new Array(4).fill({}).map((_, i) => ({
  color: faker.color.rgb({ casing: 'upper' }),
  icon: BiSolidUserBadge,
  number:
    Math.random() < 0.5
      ? faker.datatype.number({ min: 1, max: 100 })
      : faker.datatype.number({ min: 0, max: 100, precision: 0.01 }),
  dataKey: data[i],
  percentage: faker.number.int({ min: -100, max: 100 }),
  chartData: [
    { name: 'Sun', [data[i]]: faker.number.int(100) },
    { name: 'Mon', [data[i]]: faker.number.int(100) },
    { name: 'Tue', [data[i]]: faker.number.int(100) },
    { name: 'Wed', [data[i]]: faker.number.int(100) },
    { name: 'Thu', [data[i]]: faker.number.int(100) },
    { name: 'Fri', [data[i]]: faker.number.int(100) },
    { name: 'Sat', [data[i]]: faker.number.int(100) },
  ],
}));

export const barChartRevenueData: BarChartDataType = {
  title: 'Profit Earned',
  color: '#8884d8',
  dataKey: 'profit',
  chartData: [
    {
      name: 'Sun',
      profit: faker.datatype.number({ min: 1000, max: 9999 }),
    },
    {
      name: 'Mon',
      profit: faker.datatype.number({ min: 1000, max: 9999 }),
    },
    {
      name: 'Tue',
      profit: faker.datatype.number({ min: 1000, max: 9999 }),
    },
    {
      name: 'Wed',
      profit: faker.datatype.number({ min: 1000, max: 9999 }),
    },
    {
      name: 'Thu',
      profit: faker.datatype.number({ min: 1000, max: 9999 }),
    },
    {
      name: 'Fri',
      profit: faker.datatype.number({ min: 1000, max: 9999 }),
    },
    {
      name: 'Sat',
      profit: faker.datatype.number({ min: 1000, max: 9999 }),
    },
  ],
};

export const barChartVisitData: BarChartDataType = {
  title: 'Total Visit',
  color: '#FF8042',
  dataKey: 'visit',
  chartData: [
    {
      name: 'Sun',
      visit: faker.datatype.number({ min: 1000, max: 9999 }),
    },
    {
      name: 'Mon',
      visit: faker.datatype.number({ min: 1000, max: 9999 }),
    },
    {
      name: 'Tue',
      visit: faker.datatype.number({ min: 1000, max: 9999 }),
    },
    {
      name: 'Wed',
      visit: faker.datatype.number({ min: 1000, max: 9999 }),
    },
    {
      name: 'Thu',
      visit: faker.datatype.number({ min: 1000, max: 9999 }),
    },
    {
      name: 'Fri',
      visit: faker.datatype.number({ min: 1000, max: 9999 }),
    },
    {
      name: 'Sat',
      visit: faker.datatype.number({ min: 1000, max: 9999 }),
    },
  ],
};

export default chartUser;
