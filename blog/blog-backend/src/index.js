const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const api = require('./api');

const app = new Koa();
const router = new Router();

router.get('/', ctx => {
    ctx.body = 'THIS IS HOME';
});

router.use('/api', api.routes());

app.use(bodyParser());

// app instance에 router 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    console.log('Listening to port 4000');
});