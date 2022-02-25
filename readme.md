# demo for the `[ERR_MODULE_NOT_FOUND]` part.

I opened [this issue](https://github.com/nodejs/node/issues/42116) on nodeJs, This is the minimal repro for the part of the node_modules.

I need to load third party esm modules in my app. I have no control over that, so i can _not_ make them import `.js` files.

To reproduce the issue run `npm start`
When you run `npm run works` the same program will work. this time it is using the `--experimental-specifier-resolution=node` option.
