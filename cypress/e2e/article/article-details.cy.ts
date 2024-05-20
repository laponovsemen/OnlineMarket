
let currentArticleId = "";

describe("Пользователь заходит на страницу статьи", () => {

    beforeEach(() => {
        cy.login();
        cy.createArticle().then(article => {
            currentArticleId = article.id;
            cy.log(JSON.stringify(article));
            cy.visit(`/articles/${article.id}`);
        });
    });

    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    // создали статью - протестили все что угодно - удалили статью
    it.skip("И видит содержимое статьи", () => {
        cy.getByTestId("ArticleDetails.Info").should("exist");
    });

    it.skip("И видит список рекомендаций", () => {
        cy.getByTestId("ArticleRecommendationsList").should("exist");
    });

    it.skip("И оставляет комментарий", () => {
        cy.getByTestId("ArticleDetails.Info").should("exist");
        cy.getByTestId("AddCommentForm").should("exist");
        cy.getByTestId("AddCommentForm").scrollIntoView();
        cy.addComment("text");
        cy.getByTestId("CommentCard.Content").should("have.length", 1);
    });

    it("И ставит оценку", () => {
        cy.intercept("GET", "**/articles/*", {fixture: "article-details.json"});
        cy.getByTestId("ArticleDetails.Info").should("exist");
        cy.getByTestId("RatingCard").should("exist");
        cy.getByTestId("RatingCard").scrollIntoView();
        cy.setRate(5, "feedback");
        cy.getBySelected(true).should("have.length", 5);
    });

});

export {};
