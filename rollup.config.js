import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import execute from 'rollup-plugin-execute';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default {
  input: 'lib/index.js',
  external: ['stream'],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    resolve(),
    commonjs({
      namedExports: {
        'node_modules/react-konva/lib/ReactKonva.js': [
          'Stage',
          'Layer',
          'Group',
          'Rect',
          'Shape'
        ],
        'node_modules/react-is/index.js': [
          'isElement',
          'isValidElementType',
          'ForwardRef'
        ]
      }
    }),
    terser()
    // execute('yalc push --changed')
  ]
};
