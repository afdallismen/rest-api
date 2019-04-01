## REST API

REST API built with Express and Sequelize.

List of user routes:

|Route|HTTP|Header(s)|Body|Description|Response body|
|:---|:---|:---|:---|:---|:---|:---|
|/api/signup|POST|none|{ username: STRING, password: STRING }|Create new user|Created object|
|/api/signin|POST|none|{ username: STRING, password: STRING }|Authenticate credentials|{ token: STRING }|
|/api/users|GET|{ token: STRING }|none|Get all the users|Array of user|
|/api/users/:id|GET|{ token: STRING }|none|Get single user by its id|A user object|
|/api/users|POST|{ token: STRING }|{ username: STRING,<br>password: STRING,<br>role: STRING }|Admin create user|Created object|
|/api/users/:id|DELETE|{ token: STRING }|none|Admin delete user|none|
|/api/users/:id|PUT|{ token: STRING }|{ username: STRING,<br>password: STRING,<br>role: STRING }|Admin update user|none|
|/api/users/:id|PATCH|{ token: STRING }|optional|Admin update user|none|

## Usage

Make sure you have Node.js and npm installed in your computer, and then run these commands:
```
$ npm install
$ sequelize init
$ sequelize db:migrate
$ npm app.js
```