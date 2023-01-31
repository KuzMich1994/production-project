import path from 'path';
import webpack from 'webpack';
import {buildWebpackConfig} from './config/build/build-webpack-config';
import {BuildEnv, BuildPaths} from './config/build/types/config';



export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }

  const MODE = env.mode || 'development';
  const PORT = env.port || 3000;
  const isDev = MODE === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode: MODE,
    paths: paths,
    isDev,
    port: PORT,
  });

  return config;
};