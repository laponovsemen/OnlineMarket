import { ReactNode } from "react";
import {render} from "@testing-library/react";
import { I18nextProvider } from 'react-i18next';
import i18nextForTEst from "shared/config/i18n/i18nextForTEst";


export function renderWithTranslation(component : ReactNode) {

	return render(
		<I18nextProvider i18n={i18nextForTEst}>
				{component}
			</I18nextProvider>
	)
}
