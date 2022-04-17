# :two::one:[ Backend KOA](https://github.com/yhuj79/Learn_React/blob/master/chap/21_BackendKOA.md)

<div align="left"><a href='https://github.com/yhuj79/Learn_React/blob/master/chap/15_ContextAPI.md'><<:one::five:PREV (SPA)</a></div>
<!--<div align="right"><a href='https://github.com/yhuj79/Learn_REACT/blob/master/chap/21_BackendKOA.md'>:one::five:NEXT ( ) >></a></div>-->

## 1 ) ESLint Prettier 세팅

폴더 생성 후  blog-backend 에 패키지 정보를 생성

```javascript
yarn init -y
```

KOA 웹 프레임워크 설치

```javascript
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

```javascript
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

```javascript
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

## 2 ) KOA

```javascript
// index.js

const Koa = require('koa');

const app = new Koa();

app.use(ctx => {
    ctx.body = 'hello world';
});

app.listen(4000, () => {
    console.log('Listening on port 4000');
});
```