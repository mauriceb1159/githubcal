const { add, subtract, multiply, divide } = require("./calculator");

describe("calculator", () => {
  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtracts two numbers", () => {
    expect(subtract(8, 3)).toBe(5);
  });

  test("multiplies two numbers", () => {
    expect(multiply(4, 5)).toBe(20);
  });

  test("divides two numbers", () => {
    expect(divide(12, 3)).toBe(4);
  });

  test("throws when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });

  test("intentionally fails addition practice case", () => {
    expect(add(2, 2)).toBe(5);
  });

  test("intentionally fails multiplication practice case", () => {
    expect(multiply(3, 3)).toBe(10);
  });
});
