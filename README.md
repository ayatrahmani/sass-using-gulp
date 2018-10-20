# sass-using-gulp
sass example
Installing Gulp
```
#1 Node Js

#2 npm install gulp -g

#3 $ npm init  create package json

#4 npm install gulp --save-dev    node_modules.

#5 Create gulpfile.js

#6 code in gulpfile.js :-

     var gulp = require('gulp');

      //create task 

        gulp.task('welcome-ayat',function(){
            return console.log('Welcom To Ayat');
        })

 in cammand gulp welcome-ayat  //call
             // copy file
            gulp.task('copy-ayat',function(){
                return gulp.src('assets/src/css/*')
                    .pipe(gulp.dest('assets/dist/css'));
            })


#7 sass install 

   npm install gulp-sass --save-dev

   // Requires the gulp-sass plugin
var sass = require('gulp-sass');
gulp.task('sass',function(){
    return gulp.src('assets/src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/dist/css'));
})
gulp.task('watch', function(){
    gulp.watch('assets/src/sass/*.scss', ['sass']); 
    // Other watchers
  })
  ```
