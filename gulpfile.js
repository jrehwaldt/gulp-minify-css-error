var 
    gulp        = require('gulp'), 
    sass        = require('gulp-ruby-sass') ,
    prefix      = require('gulp-autoprefixer'),
    minifyCss   = require('gulp-minify-css'),
    rename      = require('gulp-rename'),
    sourcemaps  = require('gulp-sourcemaps');

var config = {
	scssDir: './scss/',
	bowerDir: './bower_components/',
	cssDir: './css/'
}
gulp.task('scss',function(){
    return sass(
        config.scssDir + '/style.scss',
        {
            style: 'expanded',
             loadPath: [
                  config.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
                 config.bowerDir + '/fontawesome/scss',
                 config.scssDir
            ], 
              sourcemap: true,
               trace: true
         }) 
        //  .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
        .pipe(sourcemaps.write())
         .pipe(gulp.dest(config.cssDir))
        .pipe(rename({suffix: '.min' }))
        .pipe(minifyCss())
         .pipe(gulp.dest(config.cssDir))
});

gulp.task('default', ['scss']);