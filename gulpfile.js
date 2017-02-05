
var gulp = require('gulp');

gulp.task('javascript',function(){
  return gulp.src("bower_components/abdmob/x2js/xml2json.min.js")
    .pipe(gulp.dest("./js"));
})

gulp.task('default',['javascript']);
