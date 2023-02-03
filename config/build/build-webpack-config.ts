import {BuildOptions} from './types/config';
import webpack from 'webpack';
import {buildPlugins} from './build-plugins';
import {buildResolvers} from './build-resolvers';
import {buildLoaders} from './build-loaders';
import {buildDevServer} from './build-dev-server';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

  const {mode, paths, isDev} = options;

  return {
    mode,
    entry: paths.entry,

    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    resolve: buildResolvers(options),
    module: {
      rules: buildLoaders(options),
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}