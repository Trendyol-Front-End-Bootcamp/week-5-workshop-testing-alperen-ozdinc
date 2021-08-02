import { toPascalCase } from "../src/ToPascalCase";

describe("toPascalCase()", () => {
  test("should make uppercase first letter of given word", () => {
    expect(toPascalCase("bootcamp")).toBe("Bootcamp");
  });
  test("should make empty if first letter is empty", () => {
    expect(toPascalCase("")).toBe("");
  });
  test("should not make pascal case when is one of 'and', 'or' ", () => {
    const sentence = "to be or not to be";

    const result = toPascalCase(sentence);
    expect(result).toBe("To Be or Not To Be");
  });
});
