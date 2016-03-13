// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var nodemon = require('gulp-nodemon');
var seq = require('run-sequence');
var app = require('./server.js');
var path = require('path');
var bases = {
 app: 'app/',
 build: 'build/',
};




var paths = {
 scripts: ['**/*.js', '*.js'],
 less: ['styles/*.less'],
 html: ['*.html'],
 templates: ['templates/*.html'],
 lib: ['bower_components/**/*.min.js'] ,
 img: ['images/*.jpg']
};

// Clean html

gulp.task('clean', function() {
 return gulp.src(bases.build)
 .pipe(clean());
});

gulp.task('copy', ['clean'], function() {
 // Copy html
 gulp.src(paths.html, {cwd: bases.app})
 .pipe(gulp.dest(bases.build));
  gulp.src(paths.img, {cwd: bases.app})
 .pipe(gulp.dest(bases.build + 'images/'));
    gulp.src(paths.templates, {cwd: bases.app})
 .pipe(gulp.dest(bases.build + 'templates/'));
 
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src(paths.scripts, {cwd:bases.app})
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our less
gulp.task('less', function() {
    return gulp.src(paths.less, {cwd:bases.app})
        .pipe(less({
          paths: [ path.resolve(__dirname, 'styles')]
		 }))
        .pipe(concat('main.css'))
        .pipe(gulp.dest(bases.build + 'css/'));
});

// Concatenate & Minify JS
gulp.task('lib', function() {
    return gulp.src(paths.lib)
        .pipe(concat('lib.js'))
        .pipe(gulp.dest(bases.build + 'js/'))
        .pipe(rename('lib.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(bases.build + 'js/'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(paths.scripts, {cwd:bases.app})
        .pipe(concat('all.js'))
        .pipe(gulp.dest(bases.build + 'js/'))
        .pipe(rename('all.min.js'))
        .pipe(gulp.dest(bases.build + 'js/'));
});

// start express server

gulp.task('develop',  function () {
    app.listen(3000, function(){
          console.log("server started on port 3000");
    });
})

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('app/'+paths.scripts, ['scripts']);
    gulp.watch('app/'+paths.less, ['less']);
});

// Default Task
gulp.task('default', function(done){

  var tasks = ['less', 'scripts', 'lib', 'copy', 'lint'];
  seq('clean', tasks, 'develop', 'watch', done);

});