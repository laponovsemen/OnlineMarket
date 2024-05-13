
import {ReactNode} from "react";
import {createPortal} from "react-dom";

interface PortalProps {
    className? :string
	children : ReactNode // что мы телепортируем
	element?: HTMLElement // куда мы телепортируем
}

export const Portal = (props : PortalProps) => {
    const {
        children,
        element = document.body
    } = props;
    return createPortal(children, element);
};

