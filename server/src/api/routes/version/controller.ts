import { Request, Response } from "express";
import config from "@/config";

const handleGetVersion = (_req: Request, res: Response) => {
  const version = config.api.version;
  res.json({ version });
};

export default handleGetVersion;
