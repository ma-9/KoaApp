import KoaRouter from 'koa-router';
import { getHomePage, showAddPage, addConcept } from '../controllers';
const router = new KoaRouter();

router.get('/', getHomePage);

router.get('/add', showAddPage);

router.post('/add', addConcept);

export default router;
