"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const concepts = [
    'Covid19 MERN App',
    'Marvellous - A  Blogging Platform',
    'ProTraSys - Project Tracking System'
];
exports.getHomePage = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.render('index', { title: 'Concept Capturer', concepts });
});
exports.showAddPage = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.render('add');
});
exports.addConcept = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const body = ctx.request.body;
    concepts.push(body.Concepts);
    ctx.redirect('/');
});
