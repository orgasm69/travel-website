var gulp = require('gulp')

var watch = require('gulp-watch')

gulp.task('default', function() {
  console.log('Horray - created a GULP task');
})

gulp.task('html', function() {
  console.log('Something usefull done to your HTML here.');
})

gulp.task('styles', function() {
  console.log('Imagine CSS tasks running here.');
})

gulp.task('watch', function() {

  watch('./app/index.html', function() {
    gulp.start('html')
  })

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles')
  })

})
