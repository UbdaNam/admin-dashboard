import { faker } from "@faker-js/faker";

interface User {
  id: number;
  name: string;
  avatar: string;
  email: string;
  amount: string;
}

const topDealUsers: User[] = new Array(7).fill({}).map(() => ({
  id: parseInt(faker.string.numeric(10)),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  amount: faker.commerce.price({ min: 100, dec: 0, symbol: "$" }),
  avatar: faker.image.avatar(),
}));

export default topDealUsers;
