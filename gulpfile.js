var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');


function style() {
  return gulp.src('sass/main.sass')
		.pipe(plumber())
		.pipe(sass())
		.pipe(postcss([
			autoprefixer()
    ]))
    .pipe(cleanCSS())
    .pipe(rename({
      basename: 'main',
      suffix: '.min'
    }))
		.pipe(gulp.dest('css'));
};

function styleAbout() {
  return gulp.src('sass/about.sass')
		.pipe(plumber())
		.pipe(sass())
		.pipe(postcss([
			autoprefixer()
    ]))
    .pipe(cleanCSS())
    .pipe(rename({
      basename: 'about',
      suffix: '.min'
    }))
		.pipe(gulp.dest('css'));
};

function styleContacts() {
  return gulp.src('sass/pcontacts.sass')
		.pipe(plumber())
		.pipe(sass())
		.pipe(postcss([
			autoprefixer()
    ]))
    .pipe(rename({
      basename: 'contacts',
    }))
    .pipe(cleanCSS())
    .pipe(rename({
      basename: 'contacts',
      suffix: '.min'
    }))
		.pipe(gulp.dest('css'));
};

function styleCatalog() {
  return gulp.src('sass/catalog.sass')
		.pipe(plumber())
		.pipe(sass())
		.pipe(postcss([
			autoprefixer()
    ]))
    .pipe(cleanCSS())
    .pipe(rename({
      basename: 'catalog',
      suffix: '.min'
    }))
		.pipe(gulp.dest('css'));
};

// function styleCard() {
//   return gulp.src('sass/card.sass')
// 		.pipe(plumber())
// 		.pipe(sass())
// 		.pipe(postcss([
// 			autoprefixer()
//     ]))
//     .pipe(cleanCSS())
//     .pipe(rename({
//       basename: 'card',
//       suffix: '.min'
//     }))
// 		.pipe(gulp.dest('css'));
// };

function styleGalery() {
  return gulp.src('sass/galery.sass')
		.pipe(plumber())
		.pipe(sass())
		.pipe(postcss([
			autoprefixer()
    ]))
    .pipe(cleanCSS())
    .pipe(rename({
      basename: 'galery',
      suffix: '.min'
    }))
		.pipe(gulp.dest('css'));
};

function styleSpisok() {
  return gulp.src('sass/spisok.sass')
		.pipe(plumber())
		.pipe(sass())
		.pipe(postcss([
			autoprefixer()
    ]))
    .pipe(cleanCSS())
    .pipe(rename({
      basename: 'spisok',
      suffix: '.min'
    }))
		.pipe(gulp.dest('css'));
};


// Если нужно сжатие картинок - раскоментировать
// var imagemin = require('gulp-imagemin');
// var imageminMozjpeg = require('imagemin-mozjpeg');

// function jpg() {
//   return gulp.src("optimg/**/*.jpg")
//     .pipe(imagemin([
//       // imagemin.jpegtran({
//       //   progressive: true,
//       //   arithmetic:true
//       // }),
//       imageminMozjpeg({quality: 90, progressive: false, smooth: 1})
//     ]))
//     .pipe(gulp.dest("img"));
// };

// function png () {
//   return gulp.src("optimg/**/*.png")
//     .pipe(imagemin([
//       imagemin.optipng({optimizationLevel: 5})
//     ]))
//     .pipe(gulp.dest("img"));
// };

// function svg () {
//   return gulp.src("optimg/**/*.svg")
//     .pipe(imagemin([
//       imagemin.svgo()
//     ]))
//     .pipe(gulp.dest("img"));
// };

function watch() {
  gulp.watch("sass/**/main.sass", style);
  gulp.watch("sass/**/about.sass", styleAbout);
  gulp.watch("sass/**/pcontacts.sass", styleContacts);
  gulp.watch("sass/**/catalog.sass", styleCatalog);
  // gulp.watch("sass/**/card.sass", styleCard);
  gulp.watch("sass/**/galery.sass", styleGalery);
  gulp.watch("sass/**/spisok.sass", styleSpisok);

}

var build = gulp.series(
  style,
  styleAbout,
  styleContacts,
  styleCatalog,
  // styleCard,
  styleGalery,
  styleSpisok,
  // jpg, png, svg,
  watch
);

exports.default = build;
