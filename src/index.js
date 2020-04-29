const resolve = require('@rollup/plugin-node-resolve');
const serve = require('rollup-plugin-serve');
const livereload = require('rollup-plugin-livereload');
const { terser } = require('rollup-plugin-terser');

const isDev = process.env.ROLLUP_WATCH;

const options = {
	treeshake: isDev ? false : true,
	input: 'src/index.js',
	output: {
		file: 'public/scripts/main.js',
		format: 'es',
		sourcemap: true
	},
	watch: {
		exclude: ['node_modules/**']
	}
};

const plugins = [
	resolve(),
	isDev &&
		serve({
			contentBase: 'public',
			port: 3000
		}),
	isDev && livereload('public'),
	!isDev && terser()
];

module.exports = { options, plugins, isDev };
