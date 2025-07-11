import Subscription from "../models/subscription.model.js";

export const createSubscription = async (req, res, next) => {
  try {
    // Create new subscription
    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Subscription created successfully",
      data: subscription,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserSubscriptions = async (req, res, next) => {
  try {
    if (req.params.id != req.user._id) {
      const error = new Error("You can only access your own subscriptions");
      error.statusCode = 403;
      throw error;
    }
    const subscriptions = await Subscription.find({ user: req.params.id });

    res.status(200).json({
      success: true,
      message: "User subscriptions retrieved successfully",
      data: subscriptions,
    });
  } catch (error) {
    next(error);
  }
};

