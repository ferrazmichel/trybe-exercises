// Parte I

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = {warrior, dragon, mage};

const dragonDamage = strength => {
  const damage = Math.round(Math.random() * (strength - 15) + 15);
  mage.healthPoints -= damage;
  warrior.healthPoints -= damage;
  dragon.damage = damage;
  return damage;
}

const warriorDamage = (strength, weaponDmg) => {
  const maxDMGcalc = (strength * weaponDmg) - strength;
  const damage = Math.round(Math.random() * maxDMGcalc + strength);
  warrior.damage = damage;
  dragon.healthPoints -= damage;
  return damage;
};

const mageDamage = intelligence => {
  const magao = {
    damage: mage.mana >= 15 ? Math.round(Math.random() * intelligence + intelligence) : 'Não possui mana suficiente',
    mana: mage.mana >= 15 ? 15 : 0,
  }
  mage.damage = magao.damage;
  mage.mana -= magao.mana;
  dragon.healthPoints -= magao.damage;
  return magao;
};

// Parte II

const gameActions = {
  hof1: warriorDamage(warrior.strength, warrior.weaponDmg),
  hof2: mageDamage(mage.intelligence),
  hof3: dragonDamage(dragon.strength),
  hof4: battleMembers,
};

console.log(gameActions);