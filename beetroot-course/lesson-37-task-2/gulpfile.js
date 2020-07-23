const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const mediaQueries = require('gulp-group-css-media-queries');
const cleanCss = require('gulp-clean-css');
// const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const imageMin = require('gulp-imagemin');
const rename = require('gulp-rename');
const del = require('del');


gulp.task('browser-sync', async () => {
    browserSync({
        server: {
            baseDir: 'app'
        },
        port: 3000,
        notify: false
    });
});


gulp.task('html', async () => {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({stream: true}));
});


gulp.task('sass', async () => {
    return gulp.src('app/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(mediaQueries())
        .pipe(autoprefixer(['last 5 versions']))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}));
});


gulp.task('script', async () => {
    return gulp.src('app/js/**/*.js')
        .pipe(browserSync.reload({stream: true}));
});


gulp.task('fonts', async () => {
    return gulp.src('app/fonts/**/*')
        .pipe(browserSync.reload({stream: true}));
});


gulp.task('img', async () => {
    return gulp.src('app/img/**/*.{jpg,png,svg,gif,ico,webp}')
        .pipe(browserSync.reload({stream: true}));
});


gulp.task('images', async () => {
    return gulp.src(`app/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`)
        .pipe(imageMin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true,
            optimizationLevel: 3 // 0 to 7
        }))
        .pipe(gulp.dest('dist/img'));
});


gulp.task('clean', async () => {
    return del.sync('dist');
});


gulp.task('prebuild', async () => {
    gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));
    gulp.src('app/css/style.css')
        .pipe(gulp.dest('dist/css'))
        .pipe(cleanCss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'));
    gulp.src('app/js/script.js')
        .pipe(gulp.dest('dist/js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/js'));
    gulp.src('app/js/slick/**/*')
        .pipe(gulp.dest('dist/js/slick'));
    gulp.src('app/js/wow.min.js')
        .pipe(gulp.dest('dist/js'));
    gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
});


gulp.task('watch', async () => {
    gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'));
    gulp.watch('app/js/**/*.js', gulp.parallel('script'));
    gulp.watch('app/fonts/**/*', gulp.parallel('fonts'));
    gulp.watch('app/img/**/*.{jpg,png,svg,gif,ico,webp}', gulp.parallel('img'));
    gulp.watch('app/*.html', gulp.parallel('html'));
});


gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));
gulp.task('build', gulp.parallel('clean', 'sass', 'prebuild', 'images'));