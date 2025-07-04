import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({ title: "get all user", message: "get user endpoint" });
});

userRouter.get("/:id", (req, res) => {
  res.send({
    title: "get user by id",
    message: `get user with id ${req.params.id}`,
  });
});

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
