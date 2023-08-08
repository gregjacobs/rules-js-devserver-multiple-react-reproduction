load("@aspect_rules_js//npm:defs.bzl", "npm_link_package")
load("@aspect_rules_ts//ts:defs.bzl", "ts_config")
load("@npm//:defs.bzl", "npm_link_all_packages")

npm_link_all_packages(
    name = "node_modules"
)

npm_link_package(
    name = "node_modules/button",
    src = "//packages/button:package"
)

npm_link_package(
    name = "node_modules/button-with-description",
    src = "//packages/button-with-description:package"
)

npm_link_package(
    name = "node_modules/error-message",
    src = "//packages/error-message:package"
)

ts_config(
    name = "tsconfig",
    visibility = ["//visibility:public"],
    src = "tsconfig.json",
)