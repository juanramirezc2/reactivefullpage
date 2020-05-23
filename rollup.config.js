import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [resolve(),
    babel({
      presets: ["@babel/preset-env","@babel/preset-react"],
      plugins: [
      ],
      exclude: 'node_modules/**',
    })
  ]
};
