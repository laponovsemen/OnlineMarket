import { EditableProfileCard } from "./EditableProfileCard";
import { componentRender } from "../../../../shared/lib/tests/componentRender/componentRender";
import { Profile } from "../../../../entities/Profile";
import { Currency } from "../../../../entities/Currency";
import { Country } from "../../../../entities/Country";
import { profileReducer } from "../../model/slice/profileSlice";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { $api } from "../../../../shared/api/api";

const profile: Profile = {
    id: "1",
    first: "admin",
    lastname: "admin",
    age: 465,
    currency: Currency.USD,
    country: Country.KAZAKHSTAN,
    city: "Moscow",
    username: "admin123",
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: {
                id: "1",
                avatar: "dsd",
                username: "admin",
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};
describe("features/EditableProfileCard.test", () => {
    test("Readonly regime must toggle", async () => {
        componentRender(<EditableProfileCard id={"1"} />, options);

        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.EditButton"),
        );
        expect(
            screen.getByTestId("EditableProfileCardHeader.CancelButton"),
        ).toBeInTheDocument();
    });

    // test("При отмене значения должны обнулятся", async () => {
    //     componentRender(<EditableProfileCard id={"1"}/>, options);
    //
    //     await userEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"));
    //
    //     await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));
    //     await userEvent.clear(screen.getByTestId("ProfileCard.lastname"));
    //
    //     await userEvent.type(screen.getByTestId("ProfileCard.firstname"), "user");
    //     await userEvent.type(screen.getByTestId("ProfileCard.lastname"), "user");
    //
    //     expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue("user");
    //     expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("user");
    //
    //     await userEvent.click(screen.getByTestId("EditableProfileCardHeader.CancelButton"));
    //
    //     expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue("admin");
    //
    //
    // });

    test("Должна появится ошибка ", async () => {
        componentRender(<EditableProfileCard id={"1"} />, options);

        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.EditButton"),
        );

        await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));

        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.SaveButton"),
        );

        expect(
            screen.getByTestId("EditableProfileCard.Error.Paragraph"),
        ).toBeInTheDocument();
    });

    test("Если нет ошибок валидации, то на сервер должен уйти PUT запрос ", async () => {
        componentRender(<EditableProfileCard id={"1"} />, options);
        const mockPutReq = jest.spyOn($api, "put");
        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.EditButton"),
        );

        await userEvent.type(
            screen.getByTestId("ProfileCard.firstname"),
            "user",
        );

        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.SaveButton"),
        );

        expect(
            screen.getByTestId("EditableProfileCard.Error.Paragraph"),
        ).toBeInTheDocument();

        expect(mockPutReq).toHaveBeenCalled();
    });
});
