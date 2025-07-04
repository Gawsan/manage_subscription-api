import express from "express";
import { PORT } from "./config/env.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";

const app = express();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.send("Welcome to  App!");
});
app.listen(PORT, (hostname) => {
  console.log(` App running on http://localhost:${PORT}`);
});

export default app;
