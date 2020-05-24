import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import pkg from './package.json'

export default {
  input: 'src/main.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    }],
  plugins: [
    babel({
      presets: ["@babel/preset-env","@babel/preset-react"],
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs()
  ],
  external: ['react']
};
