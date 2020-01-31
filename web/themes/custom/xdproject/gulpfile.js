var gulp = require('gulp');
var less = require('gulp-less'); 
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;


/**
 * Task to compile less.
 */
gulp.task('compile', done => {  
  gulp.src('./less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./css/'));

  gulp.src('./less/style_ckeditor.less')
    .pipe(less())
    .pipe(gulp.dest('./css/'));

  done();
}); 

/**
 * Task to watch less changes.
 */
gulp.task('watch', function() {  
  gulp.watch('./less/**/*.less' , gulp.series('compile'));
  gulp.watch('./templates/patterns/**/*.less' , gulp.series('compile'));
});

/**
 * Task to serve less changes.
 */
gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./css/"
        }
    }); 
    gulp.watch("./less/*.less").on("change", reload);
});

/**
 * Task when running `gulp` from terminal.
 */
gulp.task('default', gulp.series(['watch', 'serve']));
