import {render, screen} from "@testing-library/react";
import {Button, ButtonTheme} from "./Button";


describe("Button test cases", function () {
    test("test render", () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText("TEST")).toBeInTheDocument();
    });

    test("test to habe class when theme is provided", () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText("TEST")).toHaveClass("clear");
        screen.debug();
    });
});
