## GoIT Node.js Course Template Homework

Виконайте форк цього репозиторію для виконання домашніх завдань (2-6)
Форк створить репозиторій на вашому http://github.com

Додайте ментора до колаборації

Для кожної домашньої роботи створюйте свою гілку.

- hw02
- hw03
- hw04
- hw05
- hw06

Кожна нова гілка для др повинна робитися з master

Після того, як ви закінчили виконувати домашнє завдання у своїй гілці, необхідно зробити пулл-реквест (PR). Потім додати ментора для рев'ю коду. Тільки після того, як ментор заапрувить PR, ви можете виконати мердж гілки з домашнім завданням у майстер.

Уважно читайте коментарі ментора. Виправте зауваження та зробіть коміт у гілці з домашнім завданням. Зміни підтягнуться у PR автоматично після того, як ви відправите коміт з виправленнями на github
Після виправлення знову додайте ментора на рев'ю коду.

- При здачі домашньої роботи є посилання на PR
- JS-код чистий та зрозумілий, для форматування використовується Prettier

### Команди:

- `npm start` &mdash; старт сервера в режимі production
- `npm run start:dev` &mdash; старт сервера в режимі розробки (development)
- `npm run lint` &mdash; запустити виконання перевірки коду з eslint, необхідно виконувати перед кожним PR та виправляти всі помилки лінтера
- `npm lint:fix` &mdash; та ж перевірка лінтера, але з автоматичними виправленнями простих помилок

**Навігація по запитам Postman:**

POST **http://localhost:8088/api/users/signup**
{"email": "sasa@mail.com",
"password": "sasa123"}

POST **http://localhost:8088/api/users/login**
{"email": "sasa@mail.com",
"password": "sasa123"}

відповідь:

{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDBmNTkzNzAzMTkxMDM5ZDVmOWU4MGUiLCJlbWFpbCI6InNhc2FAbWFpbC5jb20iLCJpYXQiOjE2Nzg3Mjc2NzEsImV4cCI6MTY3ODgxMDQ3MX0.wslVaja7fsTxCX21eDXB105Qzx8Kb1jFnk8RbXavMeA",
"user": {
"email": "sasa@mail.com",
"subscription": "starter"
}}

GET **http://localhost:8088/api/contacts**
Authorization - Bearer token
Headers - key: Authorization, value: bearer _token_

відповідь:

{"contactList": []}

POST **http://localhost:8088/api/contacts**
{"name": "",
"phone": "",
"email": "",
"favorite": "true"
}

відповідь:

{
"postedContact": {
"name": "",
"email": "",
"phone": "",
"favorite": true,
"owner": "640f593703191039d5f9e80e",
"\_id": "640f6367670f747a9154816c"
}
}

GET **http://localhost:8088/api/users/logout**

Authorization - Bearer token
Headers - key: Authorization, value: bearer _token_

...
