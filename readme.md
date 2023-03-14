## GoIT Node.js Course Template Homework

- hw02
- hw03
- hw04
- hw05
- hw06

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
"id": "640f6367670f747a9154816c"
}
}

GET **http://localhost:8088/api/users/logout**

Authorization - Bearer token
Headers - key: Authorization, value: bearer _token_

...

PATCH **http://localhost:8088/api/users/avatars**

Authorization - Bearer token
Headers - key: Authorization, value: bearer _token_
Body - form-data
key: avatar, value: завантажений файл
