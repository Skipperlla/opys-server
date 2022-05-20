import express from "express";
import {
  createQuestionTask,
  createQuestionSubTask,
  deleteQuestion,
  questionsTasks,
  questionsSubTasks,
  createAnswer,
} from "../controllers/question.js";
import {
  groupExist,
  questionExist,
  subTaskExist,
  taskExist,
  taskEndCheck,
} from "../middlewares/security/exits.js";
const router = express.Router();
const globalMiddleware = [groupExist, taskExist, taskEndCheck];
router.post(
  "/Create/Task/:groupCode/:taskId",
  globalMiddleware,
  createQuestionTask
);
router.post(
  "/Create/SubTask/:groupCode/:subTaskId",
  [groupExist, subTaskExist],
  createQuestionSubTask
);
router.delete(
  "/Delete/:groupCode/:taskId/:questionId",
  [...globalMiddleware, questionExist],
  deleteQuestion
);
router.get(
  "/Questions/Task/:groupCode/:taskId",
  globalMiddleware,
  questionsTasks
);
router.get(
  "/Questions/subTask/:groupCode/:subTaskId",
  [groupExist, subTaskExist],
  questionsSubTasks
);
router.post(
  "/Create/Answer/:groupCode/:taskId/:questionId",
  [...globalMiddleware, questionExist],
  createAnswer
);
export default router;
