import { faker } from '@faker-js/faker';

export const productRows: object[] = new Array(14).fill({}).map((_, index) => {
  const title = faker.commerce.product();
  return {
    id: index + 1,
    img: faker.image.imageUrl(100, 100, title, true),
    title: title,
    color: faker.color.human(),
    product: faker.commerce.product(),
    price: faker.commerce.price({ min: 100, max: 200, dec: 0, symbol: '$' }),
    createdAt: new Date(
      faker.date.between({
        from: '2022-01-01',
        to: '2023-01-01',
      })
    ).toLocaleDateString(),
    inStock: faker.datatype.boolean(),
  };
});
