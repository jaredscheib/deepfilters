module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "airbnb",
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        }
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [1, 2],
        "linebreak-style": [2, "unix"],
        "quotes": [2, "single"],
        "semi": [2, "always"],
        "no-inner-declarations": [0],
        "no-console": [1],
        "no-warning-comments": [1],
        "comma-dangle": [0],
        "no-param-reassign": [1],
        "prefer-const": [1],
        "no-unused-vars": [1],
        "react/prefer-stateless-function": [1],
        "no-underscore-dangle": [1, { "allowAfterThis": true }]
    }
};