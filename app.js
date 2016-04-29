/**
 * Created by wmzy on 16-4-30.
 */

import * as Koa from 'koa';

const app = new Koa();

// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.use(async(ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.listen(3000);
