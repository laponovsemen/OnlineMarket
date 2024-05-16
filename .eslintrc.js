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
                "**/src/**/*.{test,stories}.{ts,tsx}",
                "**/config/**/*.ts"
            ],
            "parserOptions": {
                "sourceType": "script"
            },
            rules: {
                "i18next/no-literal-string": "off",
                "max-len": "off",
                "@typescript-eslint/no-var-requires": "off",
                "semen-the-sailor-plugin/path-checker": "off"
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
        "semen-the-sailor-plugin",
        "unused-imports"
    ],
    "rules": {
        "@stylistic/js/indent": ["error", 4],
        "unused-imports/no-unused-imports": "error",
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

        "import/prefer-default-export": "off",
        "no-unused-vars": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "react/require-default-props": "off",
        "react/react-in-jsx-scope": "off",
        "no-underscore-dangle": "off",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/ban-ts-comment": "warn",
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
                    "border",
                    "defaultValue",
                    "alt"

                ]
            }
        ],
        "react/display-name" : "off",
        "max-len": ["error", {"ignoreComments": true, code: 100}],
        "react/jsx-props-no-spreading": "off",

        // self-made-plugins
        "semen-the-sailor-plugin/path-checker": ["error", {alias: "@"}],
        "semen-the-sailor-plugin/public-api-imports": [
            "error",
            {
                alias: "@",
                testFilesPatterns: ["**/*.test.ts", "**/*.story.*", "**/StoreDecorator.tsx"]
            }
        ],
        "semen-the-sailor-plugin/layer-imports": [
            "error",
            {
                alias: "@",
                ignoreImportPatterns: [
                    "**/StoreDecorator",
                    "**/testing"
                ]
            }
        ],



    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true
    },

};
