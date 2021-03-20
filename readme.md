<div></div>

# Build 🧱

Build tool with [esbuild](https://github.com/evanw/esbuild) for [Native Web](https://github.com/nativew/nativeweb).

<br>

### Instant serve

### Live reload

### Fast bundle

### Optimized build

### Future syntax

<br>

### One command to [start](https://github.com/nativew/start)

```zsh
npm init nativeweb
```

<br>

### Or add to your existing project

```zsh
npm install @nativeweb/build
```

`build.config.js`

```js
import build from '@nativeweb/build';

build({
    // Customize esbuild options here.
    plugins: [
        // Default plugins won't be overridden.
    ]
});
```

`package.json`

```json
{
    "type": "module",
    "scripts": {
        "start": "node build.config.js -w",
        "build": "node build.config.js"
    }
}
```

<br>

### Advanced options

```js
import build from '@nativeweb/build';

build(
    {
        // esbuild options
    },
    {
        serve: {
            // serve options
        },
        babelPlugins: [],
        postcssPlugins: []
    }
);
```

<br>

### Includes

[esbuild](https://github.com/evanw/esbuild) &nbsp; → &nbsp; Extremely fast bundler and minifier.

[PostCSS](https://github.com/postcss/postcss) &nbsp; → &nbsp; Transforms styles to the latest CSS specification.

[Babel](https://github.com/babel/babel) &nbsp; → &nbsp; Transforms scripts to the latest JS specification.

[Serve](https://github.com/nativew/serve) &nbsp; → &nbsp; Ultralight http server with live reload.

<br>

### Details

[esbuild-serve](https://github.com/nativew/esbuild-serve) &nbsp; → &nbsp; Serve with live reload for esbuild.

[esbuild-plugin-pipe](https://github.com/nativew/esbuild-plugin-pipe) &nbsp; → &nbsp; Pipe esbuild plugins output.

[esbuild-plugin-babel](https://github.com/nativew/esbuild-plugin-babel) &nbsp; → &nbsp; Babel plugin for esbuild.

[esbuild-plugin-svg](https://github.com/nativew/esbuild-plugin-svg) &nbsp; → &nbsp; Svg files import plugin for esbuild.

[esbuild-plugin-postcss-literal](https://github.com/nativew/esbuild-plugin-postcss-literal) &nbsp; → &nbsp; PostCSS tagged template literals plugin for esbuild.

[postcss-nesting](https://github.com/jonathantneal/postcss-nesting) &nbsp; → &nbsp; Nest style rules, following the CSS specification.

[postcss-custom-media](https://github.com/postcss/postcss-custom-media) &nbsp; → &nbsp; Custom Media Queries, following the CSS specification.

<br><br>

<p>
    <a href="https://github.com/nativew/nativeweb">
        <img src="https://raw.githubusercontent.com/nativew/nativeweb/1e9405c629e3a6491bb59df726044eb3823967bb/logo-square_nativeweb.svg" alt="Native Web" width="80px">
    </a>
</p>

<div></div>
