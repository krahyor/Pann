import Router from "koa-router"; 
import { authMiddleware } from "../auth";
import announcement from './announcement';
import userResult from './user_result'

const apiRouter = new Router()
apiRouter.use('/api/announcement',authMiddleware,announcement.routes())

export default apiRouter

//เชื่อมต่อ//
