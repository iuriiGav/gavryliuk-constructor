import gulp from "gulp";
import yargs from "yargs";
import sass from "gulp-sass";
import cleanCSS from "gulp-clean-css";
import gulpif from "gulp-if";
import sourcemaps from "gulp-sourcemaps";
import imagemin from "gulp-imagemin";
import del from "del";
import webpack from "webpack-stream";
import uglify from "gulp-uglify";
import named from "vinyl-named";
import browserSync from "browser-sync";
import zip from "gulp-zip";
import autoprefixer from "gulp-autoprefixer";

const server = browserSync.create();

const PRODUCTION = yargs.argv.prod;

const paths = {
  styles: {
    src: ["src/scss/style.scss"],
    dest: "./",
  },
  images: {
    src: "src/images/**/*.{jpg,jpeg,png,svg,gif}",
    dest: "images",
  },
  scripts: {
    src: ["src/js/main.js", "src/js/admin.js"],
    dest: "js",
  },
  other: {
    src: ["src/**/*", "!src/{images,js,scss}", "!src/{images,js,scss}/**/*"],
    dest: "dist/assets",
  },
  package: {
    src: [
      "**/*",
      "!.vscode",
      "!node_modules{,/**}",
      "!packaged",
      "!src{,/**}",
      "!.babelrc",
      "!.gitignore",
      "!gulpfile.babel.js",
      "!package.json",
      "!package-lock.json",
    ],
    dest: "packaged",
  },
};

/* 
=============================
reload page setup
=============================
*/

export const serve = (done) => {
  server.init({
    proxy: "http://localhost:10038"

  })
  done()
}

export const reload = (done) => {
  server.reload();
  done()
}

export const clean = () => {
  return del(["dist"]);
};

export const styles = () => {
  return gulp
    .src(paths.styles.src)
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
        // browsers: ['last 2 version', 'safari 5','ie 9', 'opera 12.1', 'ios 6', 'android 4']
      })
    )
    .pipe(gulpif(PRODUCTION, cleanCSS({ compatibility: "ie8" })))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(gulp.dest(paths.styles.dest));
};

export const images = () => {
  return gulp
    .src(paths.images.src)
    .pipe(gulpif(PRODUCTION, imagemin()))
    .pipe(gulp.dest(paths.images.dest));
};

export const copy = () => {
  return gulp.src(paths.other.src).pipe(gulp.dest(paths.other.dest));
};

export const scripts = () => {
  return gulp
    .src(paths.scripts.src)
    .pipe(named())
    .pipe(
      webpack({
        module: {
          rules: [
            {
              test: /\.js$/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: [["@babel/preset-env", { targets: "defaults" }]],
                },
              },
            },
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
          ],
        },
        output: {
          filename: "[name].js",
        },
        externals: {
          jquery: "jQuery",
        },
        devtool: !PRODUCTION ? "inline-source-map" : false,
      })
    )
    .pipe(gulpif(PRODUCTION, uglify()))
    .pipe(gulp.dest(paths.scripts.dest));
};

export const watch = () => {
  gulp.watch("src/**/*/*.scss", gulp.series(styles, reload));
  gulp.watch("wp-ig-components/scss/**/*.scss", gulp.series(styles, reload));
  gulp.watch("src/**/*/*.js", gulp.series(scripts, reload));
  gulp.watch("wp-ig-components/js/**/*.js", gulp.series(scripts, reload));
  gulp.watch("**/*.php", reload);
  gulp.watch(paths.images.src, gulp.series(images, reload));
  gulp.watch(paths.other.src, gulp.series(copy, reload));
};

export const dev = gulp.series(
  clean,
  gulp.parallel(styles, images, copy),
  serve,
  watch
);

export const compress = () => {
  return gulp
    .src(paths.package.src)
    .pipe(zip("nameoftheme.zip"))
    .pipe(gulp.dest(paths.package.dest));
};
/* 
=============================
reload page setup
=============================
*/
// export const dev = gulp.series(
//   clean,
//   gulp.parallel(styles, images, copy), serve,
//   watch
// );
export const build = gulp.series(clean, gulp.parallel(styles, images, copy));
export const bundle = gulp.series(build, compress);

export default dev;
