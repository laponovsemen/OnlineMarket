module.exports = {
    //  была проблема с нарушением импорта стилей и отсутствием глобальных переменных,
    //  решилось сп помощью ручного добавления файла глобальной
    //  декларации в тсконфиг в поле "includes"
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:i18next/recommended",
        "plugin:storybook/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}",
                "**/scripts/**",   // добавлять нужно еще две звезды после папки так как без них линтер работает только на папку
                "**/src/**/*.{test,stories}.{ts,tsx}"
            ],
            "parserOptions": {
                "sourceType": "script"
            },
            rules: {
                "i18next/no-literal-string": "off",
                "max-len": "off",
                "@typescript-eslint/no-var-requires": "off"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "i18next",
        "react-hooks",
        "@stylistic/js",
        "semen-the-sailor-plugin"
    ],
    "rules": {
        "@stylistic/js/indent": ["error", 4],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-mixed-spaces-and-tabs": 0,
        "react/jsx-indent": [2, 4],
        "react/jsx-filename-extension": [
            2,
            { extensions: [".js", ".jsx", ".tsx"]}
        ],
        "react/no-unresolved": "off",
        "no-undef": "off",
        "semen-the-sailor-plugin/path-checker": "error",
        "import/prefer-default-export": "off",
        "no-unused-vars": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "react/require-default-props": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": "warn",
        "no-underscore-dangle": "off",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/ban-ts-comment": "warn",
        "react/display-name": "warn",
        "errow-body-style": "off",

        "react-hooks/rules-of-hooks": "error", // checks rules of hooks
        "react-hooks/exhaustive-deps": "error", // checks effect dependencies
        "i18next/no-literal-string": [
            "error",
            {
                markupOnly: true,
                ignoreAttribute:[
                    "as",
                    "data-testid",
                    "to",
                    "target",
                    "align",
                    "justify",
                    "direction",
                    "gap",
                    "role",
                    "border"
                ]
            }
        ],
        "max-len": ["error", {"ignoreComments": true, code: 100}]
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true
    },

};
