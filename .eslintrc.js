module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true
    },
    extends: ['plugin:vue/essential'],
    plugins: ['vue'],
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'prettier/prettier': 'off',
        'no-useless-escape': 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};