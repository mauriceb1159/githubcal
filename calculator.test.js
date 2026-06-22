const { add, subtract, multiply, divide, square, cube } = require("./calculator");

describe("calculator", () => {
  test("adds two positive numbers", () => {
    expect(add(10, 5)).toBe(15);
  });

  test("subtracts two positive numbers", () => {
    expect(subtract(10, 5)).toBe(5);
  });

  test("multiplies two positive numbers", () => {
    expect(multiply(10, 5)).toBe(50);
  });

  test("divides two positive numbers", () => {
    expect(divide(10, 5)).toBe(2);
  });

  test("squares a number", () => {
    expect(square(4)).toBe(16);
  });

  test("cubes a number", () => {
    expect(cube(3)).toBe(27);
  });

  test("adds negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test("subtracts negative numbers", () => {
    expect(subtract(-10, -5)).toBe(-5);
  });

  test("multiplies a negative and positive number", () => {
    expect(multiply(-5, 4)).toBe(-20);
  });

  test("multiplies by zero", () => {
    expect(multiply(0, 10)).toBe(0);
  });

  test("divides zero by a number", () => {
    expect(divide(0, 5)).toBe(0);
  });

  test("throws when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });
});
