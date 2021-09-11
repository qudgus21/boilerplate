import { Router } from "express";
import version from "./routes/version";
import user from "./routes/user";

export default () => {
  const router = Router();

  version(router);
  user(router);

  return router;
};
