import esbuildServe, { isWatch } from 'esbuild-serve';
import svg from 'esbuild-plugin-svg';
import pipe from 'esbuild-plugin-pipe';
import babel from 'esbuild-plugin-babel';
import postcssLiteral from 'esbuild-plugin-postcss-literal';
import postcssNesting from 'postcss-nesting';
import postcssCustomMedia from 'postcss-custom-media';

export const isBuild = !isWatch;

const build = (options = {}, advancedOptions = {}) => {
	const { plugins = [] } = options;
	const { serve = {}, babelPlugins = [], postcssPlugins = [] } = advancedOptions;

	esbuildServe(
		{
			entryPoints: ['src/index.js'],
			outfile: 'public/scripts/main.js',
			bundle: true,
			format: 'esm',
			target: 'es2017',
			sourcemap: isWatch,
			minify: isBuild,
			...options,
			plugins: [
				...plugins,
				svg({
					customElement: true,
					minify: isBuild,
					minifyOptions: {
						plugins: [
							{
								name: 'removeViewBox',
								active: false
							},
							{
								name: 'removeDimensions',
								active: true
							}
						]
					}
				}),
				pipe({
					plugins: [
						babel({
							config: {
								sourceMaps: isWatch && 'inline',
								plugins: [
									[
										'@babel/plugin-proposal-decorators',
										{ decoratorsBeforeExport: true }
									],
									'@babel/plugin-proposal-class-properties',
									...babelPlugins
								]
							}
						}),
						postcssLiteral({
							minify: isBuild,
							config: {
								plugins: [
									postcssNesting(),
									postcssCustomMedia(),
									...postcssPlugins
								]
							}
						})
					]
				})
			]
		},
		serve
	);
};

export default build;
