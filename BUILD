load("@aspect_rules_js//npm:defs.bzl", "npm_link_package")
load("@aspect_rules_ts//ts:defs.bzl", "ts_config")
load("@npm//:defs.bzl", "npm_link_all_packages")

npm_link_all_packages(
    name = "node_modules"
)

# Link 1st party package
npm_link_package(
    name = "node_modules/@my-org/button",
    src = "//packages/@my-org/button:package"
)

ts_config(
    name = "tsconfig",
    visibility = ["//visibility:public"],
    src = "tsconfig.json",
)