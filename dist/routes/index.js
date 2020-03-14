"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const controllers_1 = require("../controllers");
const router = new koa_router_1.default();
router.get('/', controllers_1.getHomePage);
router.get('/add', controllers_1.showAddPage);
router.post('/add', controllers_1.addConcept);
exports.default = router;
