import {I18nextProvider} from "react-i18next";
import i18nForTests from "../../i18n/i18nForTests";
import {Suspense} from "react";


export const TranslationDecorator = (story: () => any) => {
    return (
        <I18nextProvider i18n={i18nForTests}>
            <Suspense fallback={""}>
                {story()}
            </Suspense>
        </I18nextProvider>
    );
};
