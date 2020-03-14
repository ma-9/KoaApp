import { Context } from 'koa';

const concepts = [
  'Covid19 MERN App',
  'Marvellous - A  Blogging Platform',
  'ProTraSys - Project Tracking System'
];

export const getHomePage = async (ctx: Context) => {
  await ctx.render('index', { title: 'Concept Capturer', concepts });
};

export const showAddPage = async (ctx: Context) => {
  await ctx.render('add');
};

export const addConcept = async (ctx: Context) => {
  const body = ctx.request.body;
  concepts.push(body.Concepts);
  ctx.redirect('/');
};
