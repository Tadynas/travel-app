var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var autoprefixer 	= require( 'gulp-autoprefixer' );
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var rename = require("gulp-rename");


gulp.task('sass', function(){
  return gulp.src('assets/sass/style.sass')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer('last 3 versions'))
    .pipe(gulp.dest('assets/css'))
});

gulp.task('compress', function () {
    return gulp.src('assets/js/*.js', { sourcemaps: true }) // path to your file
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ["@babel/preset-env"]
    }))
    .pipe(uglify())
    .pipe(rename({ suffix: '-min' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/js/min'))
    .pipe(plumber(function (error) {
            gutil.log(error.message);
            this.emit('end');
    }));
});

gulp.task('watch', function(){
  gulp.watch('assets/sass/**/*.sass', gulp.series(['sass']));
  gulp.watch('assets/js/**/*.js', gulp.series(['compress']));
  // Other watchers
});