export const setRate = (starsCount: number = 5, feedback = "feedback") => {
    cy.getByTestId(`StarRating.${starsCount}`).click({ force: true });
    cy.getByTestId("RatingCard.Input").type(feedback);
    cy.getByTestId("RatingCard.Send").click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(starsCount: number, feedback: string): Chainable<void>;
        }
    }
}
