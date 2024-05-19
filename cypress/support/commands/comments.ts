import {USER_LOCALSTORAGE_KEY} from "@/shared/const/localStorage";
import {selectByTestId} from "../../helpers/selectByTestId";
import {User} from "@/entities/User";

export const addComment = (text: string) => {
	cy.getByTestId("AddCommentForm.Input").type("text");
	cy.getByTestId("AddCommentForm.Button").click();

}

// todo добавить удаление комментария после теста
declare global {
	namespace Cypress {
		interface Chainable {
			addComment(text: string): Chainable<void>

		}
	}
}
