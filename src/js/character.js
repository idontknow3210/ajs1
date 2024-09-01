export default class Character {
  constructor(name, type) {

  if (name.length < 2 || name.length > 10) {
      throw new Error("Имя должно быть от 2 до 10 символов.");
  }

  const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  if (!types.includes(type)) {
      throw new Error("Такого типа персонажа нет.");
  }

  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;
  this.attack = null;
  this.defence = null;
  }
}
