var runSequence = require('run-sequence');

module.exports = function(gulp, gutil) {
  var prod = gutil.env.prod;

  gulp.task('build', ['clean'], function(cb) {
    if(prod) {
      runSequence('copy', 'less', 'jade', 'rev', 'images', cb);
    } else {
      runSequence('copy', 'less', 'jade', 'images', cb);
    }
  });
};
