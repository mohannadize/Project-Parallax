const gulp = require("gulp")
const concat = require("gulp-concat")
const uglify = require("gulp-uglifyes")
const uglifycss = require("gulp-uglifycss")
const autoprefix = require("gulp-autoprefixer")
const sass = require("gulp-sass")
const compress_images = require('compress-images')
const browserSync = require("browser-sync").create()


gulp.task("images",(x)=>{
     
    let ins = 'src/images/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
    let out = 'dev/imgs/';
    compress_images(ins, out, {compress_force: false, statistic: false, autoupdate: true}, false,
        {jpg: {engine: 'mozjpeg', command: ['-quality', '60']}},
        {png: {engine: 'pngquant', command: ['--quality=20-50']}},
        {svg: {engine: 'svgo', command: '--multipass'}},
        {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}}, function(error, completed, statistic){
            if (completed === true) {
                return x();
            }
    });
    
})

gulp.task("styles",()=>{
    return gulp.src("src/sass/**/*.scss")
        .pipe(sass().on("error",sass.logError))
        .pipe(autoprefix({
            browsers: ['last 2 versions']
        }))
        .pipe(uglifycss({
            "maxLineLen":500
        }))
        .pipe(gulp.dest("dev/css"))
})

gulp.task("js",()=>{
    return gulp.src("src/js/**/*.js")
        .pipe(concat("app.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dev/js"))
})

gulp.task("html", function () {
    return gulp.src("src/**/*.html")
        .pipe(gulp.dest("./dev/"));
})

gulp.task("dev",gulp.series("html","styles","js",()=>{
    browserSync.init({
        server:"./dev/"
    })

    gulp.watch("src/**/*.html").on('change', gulp.series("html", browserSync.reload));
    gulp.watch("src/js/**/*.js").on('change', gulp.series("js", browserSync.reload));
    gulp.watch("src/sass/**/*.scss").on("change", gulp.series("styles", browserSync.reload));
    // gulp.watch("src/sw.js").on("change", gulp.series("sw", browserSync.reload));
}))

gulp.task("build",gulp.series("html","styles","js"))