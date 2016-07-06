'use strict';

// Load Gulp for execution
var gulp = require("gulp");

// Compile SASS
var sass = require("gulp-sass");
var rename = require("gulp-rename");

// Compilation du SASS
gulp.task("sass", function(){
  return gulp.src('./app/scss/style.scss')
  .pipe(sass({ outputStyle: 'expanded' })
              .on('error', sass.logError)
        )
  .pipe(gulp.dest("./app/css"))
});

// Task qui regarde et compile automatiquement 
gulp.task('compileSass', function() {
    gulp.watch("./app/scss/*.scss", ['sass']);
});











