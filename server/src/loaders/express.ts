import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import config from "@/config";
import routes from "@/api";

export default (app: Express) => {
  app.use(express.json());

  app.use(express.urlencoded({ extended: true }));

  app.use(cors());

  app.use(cookieParser());

  app.use(morgan(config.mode === "development" ? "dev" : "combined"));

  app.use(config.api.prefix, routes());
};
