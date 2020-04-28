import resolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

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

export { options, plugins, isDev };
