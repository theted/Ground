var $ = require('sconf');
var pkg = require('./package.json');
var appName = 'ground-';
var version = appName + pkg.version;
var baseSrc = 'src/**/';
require('dotenv').config();

module.exports = {
  name: appName,
  version: version,
  environment: $('ENVIRONMENT', 'DEVELOPMENT'),
  serverPort: $('PORT', 3333),
  port: $('PORT', 4444),
  browserSyncPort: $('PORT_BROWSERSYNC', 2525),
  path: 'dist/',
  paths: {
    stylus: baseSrc + '*.styl',
    views: baseSrc + '**.pug',
  },
  out: {
    css: version + '.css',
  },
  bsFiles: [
    'dist/**/*.*',
  ],
  lipsum: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus, odio vestibulum pulvinar congue, velit metus ornare leo, vitae eleifend turpis neque eget ex. Aliquam ac purus id purus hendrerit ullamcorper sed in tortor. Quisque lectus quam, facilisis non rhoncus ut, suscipit ut metus. Nulla at ipsum a libero pulvinar auctor vel sed arcu. Suspendisse nec sem et nibh sodales suscipit sed at est. Phasellus dictum tellus non imperdiet tincidunt. Vivamus vestibulum nisi ut nisl efficitur, id tristique massa pellentesque. Ut ultricies nibh vel lacinia cursus. Integer non ante posuere, porttitor dolor in, aliquam ante. Suspendisse vel sem hendrerit, semper purus et, convallis orci. In id rhoncus ligula, sed volutpat arcu. Nulla malesuada, felis sit amet placerat egestas, dui dolor feugiat metus, quis hendrerit justo urna sit amet lectus.',
};
