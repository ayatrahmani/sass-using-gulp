//Variable Definition
var gulp = require('gulp');
var sass = require('gulp-sass');

//create task 

gulp.task('welcome-ayat',function(){
    return console.log('Welcom To Ayat');
})

// copy file
gulp.task('copy-ayat',function(){
    return gulp.src('assets/src/css/*')
           .pipe(gulp.dest('assets/dist/css'));
})

gulp.task('sass',function(){
    return gulp.src('assets/src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/dist/css'));
})
gulp.task('watch', function(){
    gulp.watch('assets/src/sass/*.scss', ['sass']); 
    // Other watchers
  })