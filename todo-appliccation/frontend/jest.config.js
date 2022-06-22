module.exports = {
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/assetsTransformer.js",
        "\\.(css|less)$": "<rootDir>/assetsTransformer.js",
    },
    roots: ["<rootDir>/src"],
    testEnvironment: "jsdom",
    displayName: "tests",
    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)",
    ],
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
};
