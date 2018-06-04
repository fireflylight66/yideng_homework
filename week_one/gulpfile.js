var gulp = require("gulp");
var babel = require("gulp-babel");
var watch = require("gulp-watch");
gulp.task("babeljs", function() {
  return gulp
    .src("src/**/*.js")
    .pipe(
      babel({
        presets: ["env"],
        plugins: [
          // "transform-es2015-modules-umd",
          [
            "transform-es2015-modules-systemjs",
            {
              // outputs SystemJS.register(...)
              systemGlobal: "SystemJS"
            }
          ],
          "transform-class-properties"
        ],
        sourceMaps: "inline"
      })
    )
    .pipe(gulp.dest("public/js"));
});

gulp.task("watch", function() {
  gulp.watch("src/**/*.js", ["babeljs"]);
});

gulp.task("default", ["watch", "babeljs"]);
