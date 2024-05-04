import classes from "./ProfilePage.module.scss";
import {classNames} from "../../../shared/lib/classNames/classNames";
import {Page} from "../../../widget/Page/Page";
import {VStack} from "../../../shared/ui/Stack";
import {EditableProfileCard} from "../../../features/editableProfileCard";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Text} from "../../../shared/ui/Text/Text";
import {
    EditableProfileCardHeader
} from "../../../features/editableProfileCard/ui/EditableProfileCardHeader/EditableProfileCardHeader";


interface ProfilePageProps {
    className? :string
}

const ProfilePage = ({className} : ProfilePageProps) => {

    const {id} = useParams<{id:string}>();
    const {t} = useTranslation("profile");

    if(!id) {
        return <Text text={t("Профиль не найден")}/>;
    }

    return (
        <Page className={classNames(classes.ProfilePage, {} , [className])}>

            {/*для каждого поля формы свой отдельный
                онченджхендлер это нормально так как нужны
                будут доп функции по типу валидации*/}
            {/*если два раза оборачивать комментарии литералом обьекта то все идет нахуй в ЕррорБаундери*/}
            <VStack
                max
                gap={"16"}
            >

                <EditableProfileCard id={id}/>
            </VStack>


        </Page>
    );
};

export default ProfilePage;
