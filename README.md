This repository initially illustrated an [issue in gulp-minify-css](https://github.com/murphydanger/gulp-minify-css/issues/80) and was forked from a SASS-version with the same issue [here](https://github.com/mik-laj/gulp-minify-css-error).

It was extended to show [another issue](https://github.com/plus3network/gulp-less/issues/166) introduced with `gulp-less@3.0.3`. While `gulp-minify-css` is not working with either version of the former, `gulp-cssnano` and `gulp-postcss` with `csswring` are working with sourcemaps generated from `gulp-less`up to version `3.0.2`, but fail to work with the current release `3.0.3`.

Steps to reproduce:
```
bower install && npm install
gulp
```

The minify task silently fails in both, `cssnono` and `postcss` if version 3.0.3 is installed.

Try (afterwards) the following and it'll work:
```
npm install gulp-less@3.0.2
gulp
```

Check the generated sourcemaps of the unminified css file with `index.html` and Chrome DevTools. Use `index.min.html` for the minified version.
