import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Subscription Name is required"],
      trim: true,
      minLength: 2,
      maxLength: 100,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    currency: {
      type: String,
      required: [true, "Currency is required"],
      enum: ["USD", "EUR", "GBP", "INR", "JPY", "LKR"],
      default: "LKR",
    },
    frequency: {
      type: String,
      required: [true, "Frequency is required"],
      enum: ["daily", "weekly", "monthly", "yearly"],
      default: "monthly",
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: [
        "basic",
        "premium",
        "enterprise",
        "music",
        "video",
        "podcast",
        "news",
        "education",
        "gaming",
      ],
    },
    paymentMethod: {
      type: String,
      trim: true,
      required: [true, "Payment Method is required"],
      enum: [
        "credit_card",
        "paypal",
        "bank_transfer",
        "crypto",
        "debit_card",
        "other",
      ],
    },
    status: {
      type: String,
      required: [true, "Status is required"],
      enum: ["active", "inactive", "cancelled", "expired"],
      default: "active",
    },
    startDate: {
      type: Date,
      required: [true, "Start Date is required"],
      validate: {
        validator: function (v) {
          return v <= new Date();
        },
        message: "Start Date cannot be in the future",
      },
    },

    renewalDate: {
      type: Date,
      required: [true, "Renewal Date is required"],
      validate: {
        validator: function (v) {
          return v > this.startDate;
        },
        message: "Renewal Date must be after Start Date",
      },
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
      index: true,
    },
  },
  { timestamps: true }
);

subscriptionSchema.pre("save", function (next) {
  if (!this.renewalDate) {
    const renewalPeriods = {
      daily: 1,
      weekly: 7,
      monthly: 30,
      yearly: 365,
    };
    this.renewalDate = new Date(this.startDate);
    this.renewalDate.setDate(
      this.renewalDate.getDate() + renewalPeriods[this.frequency]
    );
  }
  if (this.renewalDate < new Date()) {
    this.status = "expired";
  }
  next;
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);
export default Subscription;
