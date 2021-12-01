const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { merge } = require('webpack-merge');
const dotenv = require('dotenv').config();

const modeConfig = (env) =>
	require(`./webpack-build-utils/webpack.config.${env}.js`)(env);

module.exports = () => {
	const mode = process.env.NODE_ENV;
	console.log('mode', mode);
	return merge(
		{
			mode,
			entry: ['./src/index.tsx'],
			module: {
				rules: [
					{
						test: /\.(js|ts)x?$/,
						exclude: /node_modules/,
						loader: 'babel-loader',
					},
					{
						test: /\.(jpe?g|png|gif)$/i,
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: './dist/images/',
						},
					},
					{
						test: /\.(woff|woff2)$/,
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: './dist/images/',
						},
					},
					{
						test: /\.(css|sass|scss)$/,
						exclude: /node_modules/,
						use: [
							'style-loader',
							'@teamsupercell/typings-for-css-modules-loader',
							{
								loader: 'css-loader',
								options: { modules: true },
							},
						],
					},
				],
			},
			plugins: [
				new HtmlWebpackPlugin({
					title: 'App',
					template: './assets/html/index.html',
				}),
				new ESLintPlugin(),
				new webpack.DefinePlugin({
					'process.env': JSON.stringify(dotenv.parsed),
				}),
			],
			output: {
				filename: 'bundle.js',
				publicPath: '/',
			},
			resolve: {
				extensions: ['.tsx', '.ts', '.js', '.jsx'],
				alias: {
					'react-dom': 'react-dom',
				},
			},
		},
		modeConfig(mode)
	);
};
