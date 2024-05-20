import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localStorage";
import { User } from "@/entities/User";
import { selectBySelected, selectByTestId } from "../../helpers/selectByTestId";

export const login = (
    username: string = "testuser",
    password: string = "123",
) => {
    return cy
        .request({
            method: "POST",
            url: `http://localhost:8000/login`,
            body: {
                username,
                password,
            },
        })
        .then(({ body }) => {
            window.localStorage.setItem(
                USER_LOCALSTORAGE_KEY,
                JSON.stringify(body),
            );
            return body;
        });
};

export const getByTestId = (testId: string) => {
    return cy.get(selectByTestId(testId));
};
export const getBySelected = (selectedValue: string) => {
    return cy.get(selectBySelected(selectedValue));
};

declare global {
    namespace Cypress {
        interface Chainable {
            login(email?: string, password?: string): Chainable<User>;
            getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
            getBySelected(
                selectedValue: boolean,
            ): Chainable<JQuery<HTMLElement>>;
        }
    }
}
