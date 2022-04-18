# :two::one:[ Backend KOA](https://github.com/yhuj79/Learn_React/blob/master/chap/21_BackendKOA.md)

<div align="left"><a href='https://github.com/yhuj79/Learn_React/blob/master/chap/15_ContextAPI.md'><<:one::five:PREV (SPA)</a></div>
<!--<div align="right"><a href='https://github.com/yhuj79/Learn_REACT/blob/master/chap/21_BackendKOA.md'>:one::five:NEXT ( ) >></a></div>-->

## 1 ) ESLint Prettier 세팅

폴더 생성 후  blog-backend 에 패키지 정보를 생성

```bash
yarn init -y
```

KOA 웹 프레임워크 설치

```bash
yarn add koa
```

ESLint 세팅

```javascript
yarn add --dev eslint
yarn run eslint --init

 - To check syntax and find problems
 - CommonJS ( require/exports )
 - None of these
 - Where does your code run? Node
 - JSON
```

Prettier 생성

```json
{   // .prettierrc
    "singleQuote" : true,
    "semi" : true,
    "useTabs" : false,
    "tabWidth" : 2,
    "trailingComma": "all",
    "printWidth": 80
}

// Prettier에서 관리하는 코드 스타일은 ESLint에서 관리하지 않도록 eslint-config-prettier 설치
 yarn add eslint-config-prettier
```

.eslintrc.json 수정

```json
{
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        "no-unused-vars": "warn",
        "no-console": "off"
    }
}

```

## 2 ) KOA 기본

```javascript
// src/ index.js

const Koa = require('koa');

const app = new Koa();

app.use(ctx => {
    ctx.body = 'hello world';
});

app.listen(4000, () => {
    console.log('Listening on port 4000');
});
```

node src/index.js로 전체경로로 실행하기
BUT index.js 파일은 디렉터리까지 입력해도 실행 가능

```json
node src
```

```javascript
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', ctx => {
    ctx.body = '홈';
});
router.get('/about/:name?', ctx => { // 카테고리, 고유 ID, 이름 등의 특정 데이터를 조회
    const {name} = ctx.params;
    ctx.body = name ? `${name}의 소개` : 'NAME이 없습니다!'
});
router.get('/posts', ctx => { // 옵션에 관련된 정보. 조건 또는 기준으로 정렬 등
    const {id} = ctx.query;
    ctx.body = id ? `포스트 #${id}` : `포스트 아이디가 없습니다!`;
});

// app instance에 router 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    console.log('Listening to port 4000');
});
```

라우트 모듈화

```javascript
// src/api/ index.js
const Router = require('koa-router');
const api = new Router();

api.get('/test', ctx => {
    ctx.body = 'test 성공';
});

module.exports = api;

// src/ index.js
const Koa = require('koa');
const Router = require('koa-router');

const api = require('./api');

const app = new Koa();
const router = new Router();

router.get('/', ctx => {
    ctx.body = 'THIS IS HOME';
});

router.use('/api', api.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    console.log('Listening to port 4000');
});
```

## 3 ) Nodemon

코드 변경 시 서버를 자동으로 재시작하게 설정

```bash
yarn add --dev nodemon
```

package.json scripts 수정

```json
// yarn start       - 재시작이 필요 없을 때
// yarn start:dev   - 재시작이 필요할 때
"scripts": {
    "start": "node src",
    "start:dev": "nodemon --watch src/ src/index.js"
}
```
