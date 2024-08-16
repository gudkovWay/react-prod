import { classNames } from "shared/utils/classNames/classNames";

describe("classNames", () => {
  test("via only first param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("via additional classes", () => {
    const expected = "someClass class1 class2";
    expect(classNames("someClass", {}, ["class1", "class2"])).toBe(expected);
  });
  test("via all params", () => {
    const expected = "someClass class1 class2 hovered";
    expect(
      classNames("someClass", { hovered: true }, ["class1", "class2"])
    ).toBe(expected);
  });
});
