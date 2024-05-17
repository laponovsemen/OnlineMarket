import MainPage from "@/pages/MainPage/ui/MainPage";
import {selectByTestId} from "../../helpers/selectByTestId";

describe("Роутинг", () => {
// todo е2е тесты должны проверять глобальную работу приложения в связке с бекендом - полная интеграция
    describe("Пользователь НЕ авторизован", () => {
        it("Переход на главную страницу", () => {
            // cy.mount()
            cy.visit("/");
            cy.get(selectByTestId("MainPage")).should("exist");
        });

        it("Переход открывает страницу профиля", () => {
            // cy.mount()
            cy.visit("/profile/1");
            cy.get(selectByTestId("MainPage")).should("exist");
        });

        it("Переход открывает несуществующий маршрут", () => {
            // cy.mount()
            cy.visit("dlkfsldf");
            cy.get(selectByTestId("NotFoundPage")).should("exist");
        });
    })



    describe("Пользователь  авторизован", () => {
        beforeEach(() => {
            cy.login("admin", "123")
        })

        it("Переход открывает страницу профиля", () => {
            // cy.mount()
            cy.visit("/profile/1");
            cy.get(selectByTestId("ProfilePage")).should("exist");
        });

        it("Переход открывает страницу со списком статей", () => {
            // cy.mount()
            cy.visit("/articles");
            cy.get(selectByTestId("ArticlesPage")).should("exist");
        });
    })



});

export {};
