// AppAuthFunction
const Koa = require('koa');
const app = new Koa();

import Router from 'koa-router';
import { auth } from './auth';

const routerAuth = new Router();
const routerOpen = new Router();

//Open APIS (APIs that dont need to Authenticate)
routerOpen.get('/api/version', ctx => {
    ctx.status = 200;
    ctx.body = {
        status: OK,
        message: version,
    };
});

app.use(routerOpen.routes());

//Authorized APIs
//Beyond this points APIS need to be Authenticated
routerAuth.use(auth);

// auth
routerAuth.post('/api/auth/v1/login/email', authEmail);
routerAuth.post('/api/auth/v1/login/password', authPassword);

app.use(routerAuth.routes());

// Default not found 404
app.use(ctx => {
    ctx.status = 404;
});


