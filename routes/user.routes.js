import { Router } from "express";
import { getuser, getusers } from "../controller/user.controller.js";
import authorize from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getusers);

userRouter.get("/:id", authorize, getuser);

userRouter.post("/", (req, res) => {
  res.send({ title: "create user", message: "create user endpoint" });
});
userRouter.put("/:id", (req, res) => {
  res.send({
    title: "update user",
    message: `update user with id ${req.params.id}`,
  });
});

userRouter.delete("/:id", (req, res) => {
  res.send({
    title: "delete user",
    message: `delete user with id ${req.params.id}`,
  });
});

export default userRouter;
