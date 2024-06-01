import sortHeroes from '../src/sort.js';

test('Сортирует массив по убыванию жизни', () => {
  const mage = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const received = sortHeroes(mage);
  expect(received).toEqual(expected);
});