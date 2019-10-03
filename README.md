# Weather forecast App

## Руководство по запуску проекта
Для запуска проекта локально и работы с ним необходимо:
* node.js (скачать на оф. сайте)
* установить gulp и bower 
```bash
npm install -g bower gulp
```
* в папке проекта инициализировать npm
```bash
npm init
```
* установить необходимые пакеты 
```bash
npm install --save gulp gulp-less gulp-autoprefixer gulp-concat-css browser-sync
```
* инициализировать bower и скачать необходимые пакеты
```bash
bower init
bower install --save bootstrap jquery
```

Все необходимые скрипты находятся в `gulpfile.js` 
Чтобы запустить обработку sass и njk необходимо ввести `gulp` в терминале, в папке проекта.