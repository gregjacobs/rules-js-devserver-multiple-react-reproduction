load("@aspect_rules_webpack//webpack:defs.bzl", "webpack_devserver")

webpack_devserver(
    name = "serve",
    node_modules = "//:node_modules",
    chdir = package_name(),
    entry_point = "src/app.tsx",
    data = [
        "tsconfig.json",
        "//:tsconfig",

        # 1st-party dependency
        "//:node_modules/error-message",

        # 3rd-party dependencies
        "//:node_modules/@types/react",
        "//:node_modules/@types/react-dom",
        "//:node_modules/html-webpack-plugin",
        "//:node_modules/react",
        "//:node_modules/react-dom",
        "//:node_modules/ts-loader",
        "//:node_modules/webpack-bundle-analyzer",
    ],
    webpack_config = "webpack.config.js",
    args = [
        '--open',
    ],
)