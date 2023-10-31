import { faker } from '@faker-js/faker';

export const userRows: object[] = new Array(9).fill({}).map((_, index) => ({
  id: index + 1,
  lastName: faker.person.firstName(),
  firstName: faker.person.lastName(),
  img: faker.image.avatar(),
  age: faker.datatype.number({ min: 18, max: 100 }),
  verified: faker.datatype.boolean(),
  email: faker.internet.email(),
  phone: faker.phone.number().split('x')[0],
  createdAt: new Date(
    faker.date.between({
      from: '2022-01-01',
      to: '2023-01-01',
    })
  ).toLocaleDateString(),
}));
