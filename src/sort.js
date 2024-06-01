
let heroes = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]

function sortHeroes(heroes) {
  return heroes.sort((a, b) => b.health - a.health);
}

export default sortHeroes;