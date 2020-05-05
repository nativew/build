# Build 🧱
Rollup configuration for [Native Web](https://github.com/nativew/nativeweb).

🚧 **Work in progress**

## ✨ Features
- **Serve**. Access your website on localhost.
- **Reload**. Refresh your browser automatically on save.
- **Bundle**. Include your npm dependencies in your bundle.
- **Minify**. Optimize your bundle without compiling to ES5.

## 🚀 Start
### New project
```zsh
# Create a new project
npm init nativeweb

# And run it 👟
npm start
```
### Existing project
```zsh
# Add to an existing project
npm install @nativeweb/build

# And import it in your rollup.config.js
```

## 🧳 Dependencies
| Package | Description | Size |
| ------- | ----------- | ---- |
| [@rollup/plugin-node-resolve] | Bundle npm dependencies. | 1mB |
| [rollup] | The bundler. | 3mB |
| [rollup-plugin-livereload] | Reload the browser on save. | 1mB |
| [rollup-plugin-serve] | Serve on localhost. | 0mB |
| [rollup-plugin-terser] | Minify ES bundle. | 3mB |

[@rollup/plugin-node-resolve]: https://github.com/rollup/plugins/tree/master/packages/node-resolve
[rollup]: https://github.com/rollup/rollup
[rollup-plugin-livereload]: https://github.com/thgh/rollup-plugin-livereload
[rollup-plugin-serve]: https://github.com/thgh/rollup-plugin-serve
[rollup-plugin-terser]: https://github.com/TrySound/rollup-plugin-terser

## 🤝 License 
[ISC](https://github.com/nativew/build/blob/master/license)

<p>
<br>
    <a href="https://github.com/nativew/nativeweb">
        <img src="https://raw.githubusercontent.com/nativew/nativeweb/53d4fe591d5992c81b3faeb656fd1aea7aabb413/logo-square.svg?sanitize=true" alt="Native Web" width="50px">
    </a>
</p>
