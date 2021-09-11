import { Router } from "express";
import { handleCreateUser } from "./controller";

const usersRouter = Router();

export default (router: Router) => {
  router.use("/user", usersRouter);

  usersRouter.post("/", handleCreateUser);
};
