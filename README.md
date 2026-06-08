### При нажатии на ссылку не перебрасывает на сайт, так как у меня нет домена и SSL протокола, просто скопируйте ссылку и вставьте в адресную строку самостоятельно.

<a href="https://trendshift.io/repositories/21997" target="_blank"><img src="https://trendshift.io/api/badge/repositories/21997" alt="mvanhorn%2Flast30days-skill | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

## Суть проекта "Черный дельфин":
### Новостной сайт с поиском, где можно сохранять новости и читать их без подключения к интернету.
### Новости берутся с News API

## Структура проекта:
```
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
```

## Как запустить проект?
### Зайдите в cmd, и пропишите следующую команду в терминале
```bash
git clone https://github.com/xzuulo/practice777.git путь_к_папке
```
### Затем откройте проект в своём редакторе кода или в терминале, и пропишите команду для установки всех зависимостей:
```bash
npm install
```
### Так же вам необходимо создать свой файл `.env` и вписать свои переменные, это необходимо для работы API новостей:
```
NEWS_API_KEY=вставьте_ключ_от_newsapi
PORT=3000
```
### После установки зависимостей и вставки своего API ключа, вы можете запускать проект:
```bash
npm start
```
### Так же вы можете запустить проект в режиме разработчика:
```bash
npm run dev
```

## На этом всё, спасибо за внимание!
