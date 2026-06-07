# practice777

## Суть проекта "Черный дельфин":
### Новостной сайт с поиском, где можно сохранять новости и читать их без подключения к интернету.
### Новости берутся с News API

## Структура проекта:
`
.
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── public
│   ├── css
│   │   └── style.css
│   ├── index.html
│   └── js
│       └── app.js
└── src
    ├── app.js
    ├── controllers
    │   └── newsController.js
    ├── routes
    │   └── newsRoutes.js
    ├── server.js
    └── services
        └── newsService.js


## Как запустить проект?
### Зайдите в cmd, и пропишите следующую команду в терминале
`bash
git clone https://github.com/xzuulo/practice777.git путь_к_папке
`
### Затем откройте проект в своём редакторе кода или в терминале, и пропишите команду для установки всех зависимостей:
`bash
npm install
`
### После того как зависимости установились, вы можете запускать проект:
`bash
npm start
`
### Так же вы можете запустить проект в режиме разработчика:
`bash
npm run dev
`

## На это всё, спасибо за внимание!