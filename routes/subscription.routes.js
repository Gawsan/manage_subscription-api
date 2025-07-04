import { Router } from "express";

const subscriptionRouter = Router();

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
subscriptionRouter.post("/", (req, res) => {
  res.send({
    title: "Create subscription",
    message: "New subscription created",
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

subscriptionRouter.get("users/:id", (req, res) => {
  res.send({
    title: "Get user subscriptions",
    message: `List of subscriptions for user with ID ${req.params.id}`,
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
