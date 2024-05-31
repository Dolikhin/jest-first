import getHealthStatus from '../src/js/health.js';
test('Возвращает сообщение в зависимости от количества жизни', () => {
  const mage = { name: 'Маг', health: 90 };
  const expected = 'healthy';
  const received = getHealthStatus(mage);
  expect(received).toBe(expected);
});