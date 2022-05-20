import express from "express";
import {
  singleTask,
  uploadFiles,
  allTasks,
  endTask,
} from "../../controllers/task/student.js";
import fileUpload from "../../middlewares/fileUpload.js";

import {
  groupExist,
  taskExist,
  studentExist,
  taskEndCheck,
} from "../../middlewares/security/exits.js";
import validate from "../../middlewares/validate.js";
import { CreateGroup } from "../../validations/Group.js";
const router = express.Router();
const globalMiddleware = [groupExist, taskExist, taskEndCheck];

router.get("/Single/:groupCode/:taskId", globalMiddleware, singleTask);
router.post(
  "/Upload/:groupCode/:taskId",
  [...globalMiddleware, fileUpload.array("uploads", 10)],
  uploadFiles
);
router.get("/Tasks", allTasks);
router.get("/End/:groupCode/:taskId", endTask);

export default router;
