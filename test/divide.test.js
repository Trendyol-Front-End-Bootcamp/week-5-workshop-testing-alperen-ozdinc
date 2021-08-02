import { divide } from "../src/divide";

describe("divide()", () => {
  test("should divide", () => {
    const dividend = 10;
    const divisor = 2;

    const result = divide(dividend, divisor);
    expect(result).toBe(5);
  });

  it("should throw error when dividend is not a number", () => {
    expect(() => divide("NaN", 3)).toThrow("Invalid argument");
  });

  it("should throw error when divisor is not a number", () => {
    expect(() => divide("NaN", 3)).toThrow("Invalid argument");
  });

  it("should throw error when divisor is zero", () => {
    expect(() => divide(2, 0)).toThrow("Divide by zero!");
  });
});
