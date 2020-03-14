import Koa from 'koa';
import CustomRoutes from './routes';
import render from 'koa-ejs';
import bodyParser from 'koa-bodyparser';
import path from 'path';
const app = new Koa();
const port = 5000 || process.env.PORT;

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'layouts',
  viewExt: 'html',
  cache: false,
  debug: false
});

// Initializing Body Parser
app.use(bodyParser());

// Initializing Custom Routes with Koa App
app.use(CustomRoutes.routes()).use(CustomRoutes.allowedMethods());

app.listen(port);
