module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: [
    'vue',
  ],
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
    ecmaVersion: 2019,
    ecmaFeatures: {
      jsx: true,
      vue: true,
    },
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:vue/strongly-recommended',
    'plugin:vue/essential',
    'plugin:vue/recommended',
    '@nuxtjs/eslint-config-typescript',
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "never",
      "exports": "never",
      "functions": "never"
    }],
    semi: ["error", "always"],
    'space-before-function-paren': ["error", {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always"
    }],

    curly: "off",
    'no-console': 'off',
    'no-debugger': 'off',
    'import/no-unresolved': [
      0,
      {
        commonjs: true,
        amd: true,
      },
    ],
    'function-paren-newline': [
      'error',
      'consistent',
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow:
          [
            '_id',
            '_key',
            '_isVue',
            '__get',
            '__typename',
          ],
      },
    ],
    'vue/attribute-hyphenation': [
      'error',
      'always',
    ],
    'vue/html-end-tags': 'error',
    "vue/html-indent": ['error', 2, {
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
    }],
    'vue/html-self-closing': ['error', {
      "html": {
        "void": "always",
        "normal": "never",
        "component": "always"
      },
      "svg": "always",
      "math": "always",
    }],
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'error',
    'vue/attributes-order': 'error',
    'vue/html-quotes': [
      'error',
      'double',
    ],
    'vue/order-in-components': 'error',
  }
}
