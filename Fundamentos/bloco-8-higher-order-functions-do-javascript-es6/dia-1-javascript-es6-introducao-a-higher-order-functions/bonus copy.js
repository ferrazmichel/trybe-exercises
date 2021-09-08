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

const dragonDamage = () => {
  const damage = Math.round(Math.random() * (dragon.strength - 15) + 15);
  dragon.damage = damage;
  return damage;
}

const warriorDamage = () => {
  const maxDMGcalc = (warrior.strength * warrior.weaponDmg) - warrior.strength;
  const damage = Math.round(Math.random() * maxDMGcalc + warrior.strength);
  warrior.damage = damage;
  return damage;
};

const mageDamage = () => {
  const magao = {
    damage: mage.mana >= 15 ? Math.round(Math.random() * mage.intelligence + mage.intelligence) : 'Não possui mana suficiente',
    mana: mage.mana >= 15 ? 15 : 0,
  }
  mage.damage = magao.damage;
  return magao;
};

// Parte II

const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack(warrior);
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const mageTurnStats = mageAttack(mage);
    const mageDamage = mageTurnStats.damage;
    const manaSpent = mageTurnStats.mana;
    mage.damage = mageDamage;
    mage.mana -= manaSpent;
    dragon.healthPoints -= mageDamage;
  },
  dragonTurn: (dragonAttack) => {
    const dragonDamage = dragonAttack(dragon);
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.turnResults());