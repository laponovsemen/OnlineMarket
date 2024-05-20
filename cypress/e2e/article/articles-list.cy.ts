describe("Пользователь заходит на страницу со списком статей", () => {
    // todo  написать дз поиск на сортировку и поиск по названию
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit("articles");
        });
    });

    it("и статьи успешно подгружаются", () => {
        cy.getByTestId("ArticleList").should("exist");
        cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 3);
    });

    it("и статьи успешно подгружаются (на стабах (фикстурах))", () => {
        cy.intercept("GET", "**/articles?*", { fixture: "articles.json" });

        cy.getByTestId("ArticleList").should("exist");
        cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 3);
    });

    it.skip("пример заскипанного теста", () => {
        cy.getByTestId("ArticleList").should("exist");
        cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 3);
        cy.get("kasjdkad").should("exist");
    });
});

export {};
