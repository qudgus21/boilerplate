import { NextFunction, Request, Response } from "express";
import Container from "typedi";
import UsersService from "@/service/user";
import { CommonResponse } from "@/type/common";

export const handleCreateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body;

    const userServiceInstance = Container.get(UsersService);

    const { idx, createdAt, updatedAt } = (await userServiceInstance.createUser(
      email
    )) as CommonResponse;

    return res.json({ idx, createdAt, updatedAt });
  } catch (e) {
    return next(e);
  }
};
