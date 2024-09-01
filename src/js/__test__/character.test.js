import Character from "../character.js";

test("check create object of class Character", () => {
    const angel = new Character("Angel", "Undead");
    const expectedValue = {name: "Angel", 
                        type: "Undead", 
                        health: 100, 
                        level: 1,
                        attack: null,
                        defence: null};
    
    expect(angel).toEqual(expectedValue) ;
});


test("check create object with uncorrect type", () => {
   
    expect(() => new Character("Angel", "Angel")).toThrow(Error);
});


test("check create object with uncorrect length of name", () => {
    
    expect(() => new Character("AngelAndelAngel", "Undead")).toThrow();
});