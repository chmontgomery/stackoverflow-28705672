var gulp = require('gulp');
var jade = require('gulp-jade');
var data = require('gulp-data');

gulp.task('jade', function(done) {
  return gulp.src('./my.jade')
    .pipe(data(function(){
    	return {};
    }))
    .pipe(jade())
    .pipe(gulp.dest('./www/'));
});