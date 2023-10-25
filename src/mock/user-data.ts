import { faker } from '@faker-js/faker';

export const usersRows = new Array(9).fill({}).map((_, index) => ({
  id: index + 1,
  lastName: faker.person.firstName(),
  firstName: faker.person.lastName(),
  avatar: faker.image.avatar(),
  age: faker.datatype.number({ min: 18, max: 100 }),
}));
