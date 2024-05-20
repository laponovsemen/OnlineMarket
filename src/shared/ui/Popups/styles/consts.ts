import { DropDownDirection } from "../../../types/ui";
import classes from "./popup.module.scss";

export const mapDirectionClass: Record<DropDownDirection, string> = {
    "bottom left": classes.optionsBottomLeft,
    "bottom right": classes.optionsBottomRight,
    "top left": classes.optionsTopLeft,
    "top right": classes.optionsTopRight,
};
