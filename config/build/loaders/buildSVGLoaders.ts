export const buildSVGLoaders = () => {
    return {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };
};
