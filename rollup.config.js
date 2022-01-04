import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'source/javascript/application.js',
  output: {
    file: 'static/js/application.js',
    format: 'iife',
    name: 'main',
    plugins: [terser()]
  },
  plugins: [
    babel(),
    terser()
  ],
  global: {
    // jquery: '$'  // When using jquery, it must be active.
  }
}
