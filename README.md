# Boilerplate starterkit

Starterkit en Jade y Less con Boilerplate y Bootstrap.
Controlador de dependencias npm
Con automatizador de tareas Gulp


## Instalación
1. Descargar repositorio
2. Entrar en al carpeta del repositorio con el terminal.
3. Introducir la orden npm install (previamente hay que tener instalado [node.js](https://nodejs.org/en/) en el sistema). Ojo, las funciones están escritas en ECMAScript 6, actualiza node.js a la última versión para que las reconozca.
4. Teclear gulp en el terminal... y a funcionar


## Dependencias

* [autoprefixer](https://www.npmjs.com/package/autoprefixer)
* [bootstrap-less](https://www.npmjs.com/package/bootstrap-less)
* [css-mqpacker](https://github.com/hail2u/node-css-mqpacker)
* [gulp](https://www.npmjs.com/package/gulp)
* [gulp-bootlint](https://www.npmjs.com/package/gulp-bootlint)
* [gulp-csslint](https://www.npmjs.com/package/gulp-csslint)
* [gulp-html5-lint](https://www.npmjs.com/package/gulp-html5-lint)
* [gulp-jade](https://www.npmjs.com/package/gulp-jade)
* [gulp-less](https://www.npmjs.com/package/gulp-less)
* [gulp-livereload](https://www.npmjs.com/package/gulp-livereload)
* [gulp-minify-css](https://www.npmjs.com/package/gulp-minify-css)
* [gulp-postcss](https://www.npmjs.com/package/gulp-postcss)
* [path](https://www.npmjs.com/package/path)


### Bootstrap
* Se descarga al realizar al instalción de npm install
* preprocesador Less
* Configurado con solo el sistema de grilla, mixin y variables, estas últimas necesarias para el funcionamiento de la regilla. Para activar más componentes, tanto CSS como javaScript, descomentar las líneas correspondientes en el archivo ./src/less/vendors/bootstrap-index.less


### html
* Se preprocesa con [Jade](http://jade-lang.com)
* Chequea y valida código de Bootstrap con linter gulp-bootlint
* Chequea y valida código HTML5 con gulp-html5-lint
* Lo guarda en la carpeta de producción ./dist
* Recarga página del navegador con Livereload

### CSS

* Preprocesa el archivo style.less ([Less](http://lesscss.org))
* Añade prefijos de navegadores antiguos con Autoprefixer
* Pasa todas las media query al final de la hoja style.css
* Minimiza el códígo
* lo guarda en al carpeta de producción ./dist/css
* 

### javaScript

* Próximamente
* 
