import express from 'express';
import controller from '../controllers/index_controller'

const router = express.Router();

/* GET home page. */
router.get('/', controller.index)

export default router;
