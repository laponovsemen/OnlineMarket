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
                "**/src/**/*.test.{ts,tsx}"
            ],
            "parserOptions": {
                "sourceType": "script"
            },
            rules: {
                "i18next/no-literal-string": "off"
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
        "i18next"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
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
        "react/jsx-indent": [2, 4],
        "react/jsx-filename-extension": [
            2,
            { extensions: [".js", ".jsx", ".tsx"]}
        ],
        "react/no-unresolved": "off",
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
        "i18next/no-literal-string": [
            "error",
            {
                markupOnly: true,
                ignoreAttribute:[
                    "data-testid",
                    "to"
                ]
            }
        ],
        "max-len": ["error", {"ignoreComments": true, code: 100}]
    },
    globals: {
        __IS_DEV__: true
    },

};