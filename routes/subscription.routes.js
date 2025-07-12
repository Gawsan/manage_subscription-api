import { Router } from "express";
import authorize from "../middleware/auth.middleware.js";
import {
  createSubscription,
  getUserSubscriptions,
} from "../controller/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.post("/", authorize, createSubscription);
subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);

subscriptionRouter.get("/", (req, res) => {
  res.send({
    title: "Get all subscriptions",
    message: "List of all subscriptions",
  });
});
subscriptionRouter.get("/:id", (req, res) => {
  res.send({
    title: "Get subscription by ID",
    message: `Details of subscription with ID ${req.params.id}`,
  });
});

subscriptionRouter.put("/:id", (req, res) => {
  res.send({
    title: "Update subscription",
    message: `Subscription with ID ${req.params.id} updated`,
  });
});
subscriptionRouter.delete("/:id", (req, res) => {
  res.send({
    title: "Delete subscription",
    message: `Subscription with ID ${req.params.id} deleted`,
  });
});

subscriptionRouter.put("cancel/:id", (req, res) => {
  res.send({
    title: "Cancel subscription",
    message: `Subscription with ID ${req.params.id} cancelled`,
  });
});

subscriptionRouter.get("/upcoming-events", (req, res) => {
  res.send({
    title: "Upcoming Events",
    message: "List of upcoming events for subscriptions",
  });
});
export default subscriptionRouter;
