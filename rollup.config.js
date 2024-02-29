import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
const camelCase = require("lodash.camelcase")

const pkg = require("./package.json")

const libraryName = 'boot-log';

export default {
  input: `compiled/index.js`,
  output: [
    {
      file: pkg.main,
      name: camelCase(libraryName),
      format: 'umd',
    },
    {
      file: pkg.module,
      format: 'es',
    },
    // { dir: 'dist', format: "es" }
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [],
  watch: {
    include: 'compiled/**',
  },
  plugins: [
    json(),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/plugins/tree/master/packages/node-resolve
    nodeResolve(),

    getBabelOutputPlugin({
      presets: ['@babel/preset-env'],
      allowAllFormats: true
    }),

    babel({
      exclude: 'node_modules/**',
      babelHelpers: "bundled"
    }),
  ],
};
