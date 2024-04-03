import {Router} from "express";

import * as reminderController from '../controller/reminder/index.js';

const router = Router();

router.post('/post-reminder', reminderController.postReminder);

router.get('/get-reminder', reminderController.getReminder);

export default router;