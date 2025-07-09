import Subscription from "../models/subscription.model.js";

export const createSubscription = async (req, res, next) => {
  try {
    const sunscription = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });
    res.status(201).json({
      success: true,
      message: "Subscription created successfully",
      data: sunscription,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllSubscriptions = async (req, res, next) => {
  try {
    const subscriptions = await Subscription.find({ user: req.user._id });
    res.status(200).json({
      success: true,
      message: "Subscriptions fetched successfully",
      data: subscriptions,
    });
  } catch (error) {
    next(error);
  }
};
