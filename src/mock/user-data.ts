import { faker } from '@faker-js/faker';

interface UserDataType {
  id: number;
  lastName: string;
  firstName: string;
  img: string;
  age: number;
  verified: boolean;
  email: string;
  phone: string;
  createdAt: string;
}

export const userRows: UserDataType[] = new Array(19)
  .fill({})
  .map((_, index) => ({
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
