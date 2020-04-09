"use strict";

//dependencies
var gulp = require("gulp");
var sass = require("gulp-sass");
var minifyCSS = require("gulp-clean-css");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var changed = require("gulp-changed");
const del = require("del");

var SCSS_SRC = "./src/assets/scss/**/*.scss";
var SCSS_DEST = "./src/assets/css";

// Clean assets
function clean() {
  return del(["./_site/assets/"]);
}

//compile css
function compile_scss() {
  return gulp
    .src(SCSS_SRC)
    .pipe(sass().on("error", sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST));
}

//detect changes in SCSS
function watch_scss() {
  gulp.watch(SCSS_SRC, gulp.series(clean, compile_scss));
}

// const build = gulp.series(clean, compile_scss);
// const watch = gulp.series(watch_scss);

gulp.task("default", watch_scss);

exports.compile_scss = compile_scss;
exports.clean = clean;
exports.watch_scss = watch_scss;
exports.default = watch_scss;
