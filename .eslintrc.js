module.exports = {
    //  была проблема с нарушением импорта стилей и отсутствием глобальных переменных,
    //  решилось сп помощью ручного добавления файла глобальной
    //  декларации в тсконфиг в поле "includes"
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
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
        "react"
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
        "react/require-default-props": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": "warn",
        "no-underscore-dangle": "off"
    },
    globals: {
        __IS_DEV__: true
    }
};
