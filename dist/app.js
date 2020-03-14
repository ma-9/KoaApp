"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const routes_1 = __importDefault(require("./routes"));
const koa_ejs_1 = __importDefault(require("koa-ejs"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const path_1 = __importDefault(require("path"));
const app = new koa_1.default();
const port = 5000;
koa_ejs_1.default(app, {
    root: path_1.default.join(__dirname, 'views'),
    layout: 'layouts',
    viewExt: 'html',
    cache: false,
    debug: false
});
// Initializing Body Parser
app.use(koa_bodyparser_1.default());
// Initializing Custom Routes with Koa App
app.use(routes_1.default.routes()).use(routes_1.default.allowedMethods());
app.listen(port);
