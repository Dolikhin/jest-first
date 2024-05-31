import calculateTotal from '../src/js/app.js';
test('should calculate total for purchases', () => {
  const input = [
    {
      id: 1, name: '...', price: 33, count: 3,
    },
    {
      id: 2, name: '...', price: 55, count: 2,
    },
  ];
  const expected = 209;
  const received = calculateTotal(input);
  expect(received).toBe(expected);
});