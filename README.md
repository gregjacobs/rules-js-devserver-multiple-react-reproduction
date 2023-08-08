Reproduction of an issue in the (quite excellent) [rules_js](https://github.com/aspect-build/rules_js) where bundlers inside `js_run_devserver` can see two separate node_modules trees.

## To reproduce the issue

```
bazel run packages/app:serve
```

You'll see two browser windows pop open:

1. `http://localhost:8080` which has a broken page with errors in the console talking about how multiple copies of React have been loaded onto the page (React hooks error)
2. `http://127.0.0.1:8888` which serves [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) showing the two separate copies of React files that have been loaded onto the page.

![image](https://github.com/gregjacobs/rules-js-devserver-multiple-react-reproduction/assets/302273/0289219e-8993-43c9-a357-729147fffc85)

## What's happening?

Webpack is seeing two distinct `node_modules` directories because, in the `js_run_devserver` sandbox:

1. _Unscoped_ (i.e. non '@org/*') node_modules are symlinked to:

   `$(bazel info bazel-bin)/node_modules`

2. _Scoped_ (i.e. '@org/*') node_modules are symlinked to:

    `$(bazel info bazel-bin)/packages/app/serve.sh.runfiles/__main__/node_modules`

**Unscoped packages:**

![image](https://github.com/gregjacobs/rules-js-devserver-multiple-react-reproduction/assets/302273/c6d1e1a9-5706-49cc-ab6e-d1907abf27b0)

**Scoped packages:**

![image](https://github.com/gregjacobs/rules-js-devserver-multiple-react-reproduction/assets/302273/1a0e526d-2be0-4300-ae2e-f50d83aa4aad)

And therefore it seems that transitive dependencies of the scoped `@my-org/button` package are also resolved under the runfiles node_modules directory, so we end up with:

1. `$(bazel info bazel-bin)/node_modules/react` (from the Webpack app itself)
2. `$(bazel info bazel-bin)/packages/app/serve.sh.runfiles/__main__/node_modules/react` (transitive dependency of the libary component used in the app)

**Update**: I took the above screenshots with green and red boxes, but I'm realizing now that they should probably be reversed. All symlinks should probably point to `node_modules` in the runfiles tree if I'm not mistaken about this.
