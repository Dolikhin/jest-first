import getHealthStatus from '../src/js/health.js';

test('Возвращает сообщение в зависимости от количества жизни', () => {
  const mage = { name: 'Маг', health: 90 };
  const expected = 'healthy';
  const received = getHealthStatus(mage);
  expect(received).toBe(expected);
});

test.each([
  { name: 'Маг', health: 90 },
  { name: 'Воин', health: 15 },
  { name: 'Охотник', health: 45 },
  { name: 'Некромант', health: 1 },
])
('Возвращает сообщение в зависимости от количества жизни', (caracter) => {
  const mage = { name: 'Маг', health: 90 };
  const expected = 'healthy';
  const received = getHealthStatus(mage);
  expect(received).toBe(expected);
});