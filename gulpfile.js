
//npm install --save-dev gulp gulp-jade gulp-livereload gulp-less path gulp-postcss autoprefixer css-mqpacker gulp-minify-css bootstrap gulp-bootlint gulp-html5-lint
//npm install --save-dev babel babel-cli babel-preset-es2015

var gulp    = require('gulp'),
    jade = require('gulp-jade'),
    livereload = require('gulp-livereload'),
    less = require('gulp-less'),
    path = require('path'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    mqpacker = require('css-mqpacker'),
    minifyCss = require('gulp-minify-css'),
    bootlint  = require('gulp-bootlint'),
    html5Lint = require('gulp-html5-lint'),
    //csslint = require('gulp-csslint'),
    locals = { // añadir datos del proyecto. Luego podemos hacer uso de ello en Jade por ejemplo.
      empresa: 'nombre del cliente',
      pageTitle: 'título de la página',
      urlRoot : 'http://xxx.com/', 
      metaDescription : 'Descripción de la web',
      

    }


 

// livereload

livereload({ start: true })

//**********//
//** HTML **//
//**********//

      // Compilar archivo Jade a html
      // bootlint - check con linter de bootstrap 
      // html5lint - check con linter html 5
      // lo guarda en al carpeta de distribución

      //Jade
      gulp.task('jade', () => {
          return gulp
          .src('./src/jade/*.jade')
          .pipe(jade({
              pretty: true,
              locals: locals // aquí pasaríamos el objeto locals anteriormente definido
          }))
         .pipe(bootlint())
         .pipe(html5Lint())
         .pipe(gulp.dest('./dist'))
         .pipe(livereload());
      })

//**********//
//** CSS **//
//**********//


      // Compilar less

      gulp.task('less', () =>  {
        return gulp
                .src('./src/less/styles.less')
                .pipe(less({
                  paths: [
                    '.',
                    './node_modules/bootstrap-less'
                  ]
                }))
                .pipe(gulp.dest('./src/compiled'));
      });


      // Generar archivo CSS:
      // Autoprefixer
      // mqpacker (posiciona todas las mediaquerys al final del archivo CSS)
      // minimiza el archivo
      // lo guarda en al carpeta de distribución

      gulp.task('css', () => {
          var processors = [
              autoprefixer({browsers: ['last 4 version']}),
              mqpacker

          ];
          return gulp.src('src/compiled/styles.css')
              .pipe(postcss(processors))
              /*.pipe(csslint({
                  'compatible-vendor-prefixes' : false
              }
              ))*/ // las dejo comentadas porque hay que configurarlo.
              //.pipe(csslint.reporter())
              .pipe(minifyCss({compatibility: 'ie8'}))
              .pipe(gulp.dest('dist/css'))
              .pipe(livereload());
      });


//****************//
//** javaScript **//
//****************//






//watch
gulp.task('watch', () => {
  gulp.watch(['./src/**/*.less'], ['less']);
  gulp.watch(['./src/compiled/*.css'], ['css']);
  gulp.watch(['./src/jade/*.jade'], ['jade']);
});





gulp.task('default', ['watch']);

