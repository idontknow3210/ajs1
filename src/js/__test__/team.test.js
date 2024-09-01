import Character from "../character.js";
import Team from "../team.js";


test("Add new character in team", () => {
    const caracter = new Character("Mag", "Magician");
    const team = new Team();
    team.add(caracter);
    expect(team.members).toEqual(new Set([caracter]));
})


test("Add the same character in team", () => {
    const caracter = new Character("Mag", "Magician");
    const team = new Team();
    team.add(caracter);
    expect(() => team.add(caracter)).toThrow();
})


test("Add the same character in team", () => {
    const caracter = new Character("Mag", "Magician");
    const caracter_ = new Character("Angel", "Undead");
    const team = new Team();
    team.add(caracter);
    team.add(caracter_);
    expect(team.toArray()).toEqual([caracter, caracter_]);
})


test("Add all characters in team", () => {
    const caracter = new Character("Mag", "Magician");
    const caracter_ = new Character("Angel", "Undead");
    const characters = [caracter, caracter_]
    const team = new Team();
    team.addAll(...characters);
    expect(team.members).toEqual(new Set([...characters]));
})