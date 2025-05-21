const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const globals = require("globals");
const react = require("eslint-plugin-react");
const js = require("@eslint/js");
const standard = require("@vue/eslint-config-standard-with-typescript");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    settings: {
        react: {
            version: "detect",
        },
    },

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            project: ["./tsconfig.json"],
        },
    },

    extends: compat.extends(
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:prettier/recommended",
        "plugin:storybook/recommended",
    ),

    plugins: {
        react,
    },

    rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
    },
}, globalIgnores(["**/example", "**/.eslintrc.cjs"])]);
