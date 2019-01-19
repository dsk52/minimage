import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

export default {
  input: 'source/javascript/application.js',
  output: {
    file: 'static/js/application.js',
    format: 'iife',
    name: 'main'
  },
  plugins: [
    babel(),
    uglify()
  ],
  global: {
    // jquery: '$'  // When using jquery, it must be active.
  }
}
