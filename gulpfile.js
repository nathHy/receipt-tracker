var gulp = require('gulp'),
		jshint = require('gulp-jshint'),
		notify = require('gulp-notify'),
		nodemon= require('gulp-nodemon'),
		plumber= require('gulp-plumber');
console.log(nodemon);



gulp.task('default', ['start']);



// gulp.task('copyfiles', function() {
//     gulp.src('./src/*')
//     .pipe(gulp.dest('./dest'));
// });


gulp.task('jshint', function() {
    return gulp.src('./src/*.js')
    .pipe(plumber({
        errorHandler: onError
    }))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(notify({ message: 'JS Hinting task complete' }));
});


gulp.task('start', function() {
	nodemon({
		script : 'index.js',
		ext : 'js html',
		env : { 'NODE_ENV' : 'development' },
		tasks : ['jshint']
	})
	.on('restart',function(){
		console.log("restarted!");
	});
})


var onError = function(err) {
    console.log(err);
}