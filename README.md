Reproduction of an issue in the (quite excellent) [rules_js](https://github.com/aspect-build/rules_js) where bundlers inside `js_run_devserver` can see two separate node_modules trees.

## To reproduce the issue

```
bazel run packages/app:serve
```

You'll see two browser windows pop open:

1. `http://localhost:8080` which has a broken page with errors in the console talking about how multiple copies of React have been loaded onto the page (React hooks error)
2. `http://127.0.0.1:8888` which serves [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) showing the two separate copies of React files that have been loaded onto the page.

