/*declare module "*.module.scss" {
	const value: Record<string, string>;
	export =  value;
}*/
declare module "*.png";
declare module "*.scss" {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
    /*const content: any;
	export default content;*/
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGAElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: "storybook" | "frontend" | "jest";

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T;
};
