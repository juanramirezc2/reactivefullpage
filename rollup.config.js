import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import pkg from './package.json'

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
];

export default {
  input: './src/main.tsx',
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
      extensions,
      presets: ["@babel/preset-env","@babel/typescript","@babel/preset-react"],
      plugins: [
        "@babel/proposal-class-properties",
        "@babel/proposal-object-rest-spread"
      ],
      exclude: 'node_modules/**',
    }),
    resolve({ extensions }),
    commonjs()
  ],
  external: ['react']
};
