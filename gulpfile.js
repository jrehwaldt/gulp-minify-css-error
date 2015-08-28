var
    gulp        = require('gulp'), 
    less        = require('gulp-less'),
    prefix      = require('gulp-autoprefixer'),
    minifyCss   = require('gulp-minify-css'),
    rename      = require('gulp-rename'),
    sourcemaps  = require('gulp-sourcemaps');

var config = {
	lessDir: './less/',
	bowerDir: './bower_components/',
	cssDir: './css/'
}
gulp.task('less',function(){
  var paths = [
  config.bowerDir + '/bootstrap/less',
 config.lessDir
  ];
  return gulp.src( config.lessDir + '**/*.less')
    .pipe(sourcemaps.init())
    .pipe(less({paths: paths}))
    // .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
    .pipe(sourcemaps.write())
     .pipe(gulp.dest(config.cssDir))
    .pipe(rename({suffix: '.min' }))
    .pipe(minifyCss())
     .pipe(gulp.dest(config.cssDir))
});

gulp.task('default', ['less']);
