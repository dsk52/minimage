module.exports = {
  source: {
    stylesheets: 'source/sass/',
    javascripts: {
      path: 'source/javascript/',
      fileName: 'application',
      // pathLib: 'source/javascript-lib/',
      // fileNameLib: 'lib.js',
    }
  },
  build: {
    stylesheets: 'static/css/',
    javascripts: {
      path: 'static/js/',
    }
  },
  browsers: [
    '> 1%',
    'last 2 versions',
    'Firefox ESR',
    'Opera 12.1'
  ]
};
