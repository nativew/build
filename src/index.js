import esbuild from 'esbuild';
import pipe from 'esbuild-plugin-pipe';
import babel from 'esbuild-plugin-babel';
import postcssLiteral from 'esbuild-plugin-postcss-literal';
import postcssNesting from 'postcss-nesting';
import postcssCustomMedia from 'postcss-custom-media';
import chokidar from 'chokidar';
import liveServer from 'live-server';

export const isWatch = process.argv[2] == '-w';
export const isBuild = !isWatch;

const build = async (options = {}, serveOptions = {}) => {
	const {
		entryPoints = ['src/index.js'],
		outfile = 'public/scripts/main.js',
		plugins = []
	} = options;

	const {
		watch = 'src/**/*.js',
		root = 'public',
		ignore = 'public/scripts/*.map'
	} = serveOptions;

	const builder = await esbuild
		.build({
			entryPoints,
			outfile,
			bundle: true,
			format: 'esm',
			target: 'es2017',
			incremental: isWatch,
			sourcemap: isWatch,
			minify: isBuild,
			...options,
			plugins: [
				pipe({
					plugins: [
						babel({
							config: {
								plugins: [
									[
										'@babel/plugin-proposal-decorators',
										{ decoratorsBeforeExport: true }
									],
									'@babel/plugin-proposal-class-properties'
								]
							}
						}),
						postcssLiteral({
							minify: isBuild,
							config: {
								plugins: [postcssNesting(), postcssCustomMedia()]
							}
						})
					]
				}),
				...plugins
			]
		})
		.catch(() => process.exit(1));

	if (isWatch) {
		chokidar
			.watch(watch, { ignoreInitial: true })
			.on('change', () => builder.rebuild());

		liveServer.start({
			root,
			ignore,
			open: false
		});
	}
};

export default build;
