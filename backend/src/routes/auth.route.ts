import { Router } from "express";
import { body } from "express-validator";
import { registerController , loginController} from "../controllers/auth.controller";
import { validateRequest } from "../middlewares/validate.middleware";

const router = Router();

router.post(
  "/register",
  [
    body("username").isString().notEmpty(),
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
    validateRequest,
  ],
  registerController
);

router.post(
  "/login",
  [
    body("username").isString().notEmpty(),
    body("password").notEmpty(),
    validateRequest
  ],
  loginController
)

export default router;