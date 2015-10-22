var
    gulp        = require('gulp'),
    less        = require('gulp-less'),
    lessStream  = require('less-stream'),
    prefix      = require('gulp-autoprefixer'),
    rename      = require('gulp-rename'),
    sourcemaps  = require('gulp-sourcemaps'),
    sync        = require('gulp-sync')(gulp).sync,
    
    // not working with gulp-less@3.0.1 or any later version;
    // earlier versions not tested
    minifyCss   = require('gulp-minify-css'),
    
    // working with gulp-less@3.0.1 & 3.0.2
    postcss     = require('gulp-postcss'),
    csswring    = require('csswring'),
    
    // working with gulp-less@3.0.1
    cssnano     = require('gulp-cssnano');

var config = {
  lessDir: './less/',
  bowerDir: './bower_components/',
  cssDir: './css/'
};
gulp.task('less',function() {
  var paths = [
    config.bowerDir + '/bootstrap/less',
    config.lessDir
  ];
  return gulp.src(config.lessDir + '**/*.less')
    .pipe(sourcemaps.init())
    .pipe(less({paths: paths}))
    //.pipe(lessStream({paths: paths}))
    //.pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
    .pipe(sourcemaps.write('.', {includeContent: true}))
    .pipe(gulp.dest(config.cssDir));
});
gulp.task('minify',function() {
  return gulp.src([config.cssDir + '**/*.css', '!' + config.cssDir + '**/*.min.css'])
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(rename({suffix: '.min'}))
    //.pipe(minifyCss({sourceMap:true}))
    .pipe(postcss([csswring]))
    //.pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.cssDir));
});

gulp.task('default', sync(['less', 'minify']));
