# Backend-Development-Practice-
Практика по урокам BackEnd Dev. 

steps to be done: 
1. выполнить команду инициализации в npm, чтобы создать файл package.json и иметь возможность устанавливать npm пакеты --> используем в терминале команду "npm init"  
2. создаем папку src и в ней папку app.js с кодом сервера 
3. подключаем модуль http и создаем сервер --> используем функцию "http.createServer"  
4. запускаем сервер --> используем функцию "server.listen"  
5. запускаем сервер и отображаем в консоли сообщение "Server is running on address http://127.0.0.1:3003", используем команду "node src/app.js" (без обработчика запроса в браузере по указанному серверу ничего не увидим)  
6. пишем простой обработчик, который на любой запрос отображает в консоли сообщение "Hello, world!"
- первый аргумент функции "request" принимает запрос, второй аргумент функции "response" принимает ответ
- статус ответа по умолчанию 200, статусное сообщение "OK", заголовки "Content-Type: text/plain" 
- при перезапуске сервера всё получилось --> выдает строчку в браузере "Hello, world!" 
7. Расширяем функционал сервера и добавляем отдачуу списка пользователей в формате JSON при обращении по адресу "/users". 
- настраиваем обработку запроса и добавляем условие, что если адрес "/users", то ответ будет содержать список пользователей в формате JSON иначе вернем текст "Hello, world!"
8. создаем папку data и в ней файл users.json с данными о пользователях.
9. для чтения данных из файла создадим функцию getUsers(), которая с помощью модуля "fs" считывает содержимое users.json. Чтение файла сделаем синхронной функцией readFileSync, а результат выполнения этой функции отдадим пользователю 
10. для того, чтобы использовать привычные относительные пути, создаем и испопльзуем переменную "path" (const path = require("path");)
11. для определения правильного пути до файла используем метод "join" (const filePath = path.join(__dirname, "./data/users.json");) 
make a variable for a module "path" для того, чтобы использовать привычные относительные пути
12. выносим функцию получения списка пользователей в отдельный модуль
- создаем папку modules и в ней файл users.js 
- копируем часть содержимого из файла app.js --> переменную fs, path и функцию getUsers переносим в users.js  
- при переносе меняется относительный путь до файла с пользователями 
13. импортируем создаданный модуль (users.js) в основной файл (app.js)
14. чтобы не останавливать и не перезапускать сервер при изменении кода в файле users.js, нам нужно настроить hot reload с помощью пакета "nodemon" --> для установки используем в терминале команду "npm i nodemon -D" либо команду "npm install nodemon --save-dev"
- теперь для запуска используем команду "nodemon src/app.js" 
- для удобства выносим команды в npm скрипты в файле package.json --> "start": "node src/app.js" и "dev": "nodemon src/app.js"
