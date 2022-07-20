require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 8000;
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("hello World");
  console.log("hello SammmmmmWorld");
});
app.get("/sam", (req, res) => {
  res.status(200).send("hello SammmmmmWorld");
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log(total);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "inr",
    });

    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    response.status(500).send({
      err: err,
    });
  }
});

app.listen(port, () => {
  console.log("Bommm", port);
});
