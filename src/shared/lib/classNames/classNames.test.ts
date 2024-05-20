import { classNames } from "./classNames";

describe("classNames", () => {
    test("with only first param", () => {
        expect(true).toBe(true);
        expect(classNames("someClass")).toBe("someClass");
    });

    test("with additional classes", () => {
        const expected = "someClass class1 class2";
        expect(classNames("someClass", {}, ["class1", "class2"])).toBe(
            expected,
        );
    });
    test("with additional classes and mods", () => {
        const expected = "someClass class1 class2 hovered scrollable";
        expect(
            classNames("someClass", { hovered: true, scrollable: true }, [
                "class1",
                "class2",
            ]),
        ).toBe(expected);
    });
    test("with additional classes and mods but one of mods is false", () => {
        const expected = "someClass class1 class2 hovered";
        expect(
            classNames("someClass", { hovered: true, scrollable: false }, [
                "class1",
                "class2",
            ]),
        ).toBe(expected);
    });
    test("with additional classes and mods but one of mods is undefined", () => {
        const expected = "someClass class1 class2 hovered";
        expect(
            classNames("someClass", { hovered: true, scrollable: undefined }, [
                "class1",
                "class2",
            ]),
        ).toBe(expected);
    });
});
