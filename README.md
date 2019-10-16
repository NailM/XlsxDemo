Проект для загрузки Excel документа с данными и выводом данных на клиентскую часть
    1.Используемые бибилиотеки:
        -Angular CLI: 8.3.5
        -Angular 8.2.7
        -@angular/material 8.2.3
        -Node JS 12.10
    2.Стурктура проекта:
        -src Главная папка проекта
            -src/components Папка с сложными унифицированными компонентами, которые возможно переиспользовать (таковых в данном проекте нет)
            -src/views Папка с экранами, которые представляют собой законченную часть пользовательского представления
            -src/services Папка с наборами сервисов для работы с внешними API
            -все остальные папки были сгенерированы Angular CLI и про их назначение и судьбу можно почитать в официальной документации
    3.Проблемы и предложения:
        В отсутствии четкого ТЗ проект представляет собой полет мысли свободного художника, у которого очень мало времени.
            -Inline стили. Очень плохая практика. Систематизировать и вынести в общий файл стилей или scoped стили компонента.
            -Подключена лишняя опция спеков для тестирования. Тестов на данный момент нет и не планируется. Лишние файлы в проекте. Убрать
            -Модуль подключения компонентов библиотеки компонентов Angular Material. Было откровением узнать, что компоненты нужно поштучно
                подключать в файле модуля. Пристроить модуль в папку modules. Туда же отправлять все подключаемые внешние модули\библиотеки.
            -Ощутить силу typescript. В проекте мало используются типы. Придумать как типизировать данные типа Документ. Создать сущность обозначить поля.
            -Нехватка хорошей грид системы. Была рассмотрена библиотека Flex-Layout, ужасный синтаксис атрибутов раздувают компоненты и делает их 
                нечитабельными. Возможно прикрутить систему гридов от бутстрапа, но проверить на конфликты с Angular Material.
            -Отсутствие валидаций и проверок на пустоту.
            -Пользовательский опыт и красота интерфейса. Чего нет - того нет.
    Установка и запуск:
        -Собрать клентскую часть командой ng build
        -Поместить папку dist/angular-project в папку с серверной частью, предварительно переименовав ее в dist/front
    Экраны:
        -FrontPage - Первая страница, на ней размещена таблица, которая загружена первой, при отсутствии данных будет пустой экран, а нужно бы говорить о том, что данных нет
        -FileUploadPage - Страница загрузки документа, представляет собой одно поле для загрузки документа. 
        -FileList - Страница с загруженными документами. Серверная часть позволяет загружать много документов, поэтому хорошо бы их где нибудь показывать.
            Список документов представляет собой документ с генерируемым индексом. Автора документа и дату создания. Хорошо бы сделать и просмотр каждого документа.




# AngularProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
