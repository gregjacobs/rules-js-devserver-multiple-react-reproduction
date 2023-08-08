load("@aspect_rules_js//js:defs.bzl", "js_library")
load("@aspect_rules_js//npm:defs.bzl", "npm_package")
load("@aspect_rules_ts//ts:defs.bzl", "ts_project", "ts_config")
load("@bazel_skylib//rules:write_file.bzl", "write_file")

# Convenience alias for bazel build
alias(
    name = "error-message",
    actual = ":package"
)

npm_package(
    name = "package",
    visibility = ["//visibility:public"],
    package = "error-message",
    srcs = [":library"],
    out = "package",
    include_runfiles = False,

    # Don't include .ts source files and tsconfig.json in package 
    exclude_srcs_patterns = [
        "src/**",
    ]
)

js_library(
    name = "library",
    srcs = [
        ":package_json",
    ],
    deps = [
        ":js"
    ]
)

write_file(
    name = "package_json",
    out = "package.json",
    content = [
        '{',
        '    "name": "error-message",',
        '    "version": "0.0.0",',
        '    "main": "./dist/index.js",',
        '    "module": "./dist/index.js",',
        '    "typings": "./dist/index.d.ts",',
        '    "sideEffects": false',
        '}',
    ]
)

ts_project(
    name = "js",
    tsconfig = ":tsconfig",
    root_dir = "src",
    out_dir = "dist",
    srcs = [
        "src/index.tsx"
    ],
    deps = [
        "//:node_modules/button-with-description",  # Our custom package
        "//:node_modules/@types/react",
        "//:node_modules/react",
    ],
    declaration = True,
    supports_workers = False,
)

ts_config(
    name = "tsconfig",
    src = "tsconfig.json",
    deps = ["//:tsconfig"],
)