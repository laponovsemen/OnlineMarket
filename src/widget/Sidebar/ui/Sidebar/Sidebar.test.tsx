import {fireEvent, screen} from "@testing-library/react";
import {Sidebar} from "./Sidebar";
import {withTranslation} from "react-i18next";
import {
    renderWithTranslation
} from "../../../../shared/lib/tests/renderWithTranslation/renderWithTranslation";


describe("Sidebar test cases", function () {
    test("test render", () => {
        const SideBarWithTranslation = withTranslation()(Sidebar);
        renderWithTranslation(<SideBarWithTranslation/>);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });
    test("test toggle", () => {
        const SideBarWithTranslation = withTranslation()(Sidebar);
        renderWithTranslation(<SideBarWithTranslation/>);
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });

});
