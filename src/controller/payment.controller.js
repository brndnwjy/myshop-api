const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY);
const createError = require("http-errors");

const paymentController = {
  checkout: async (req, res) => {
    try {
      const { cart } = req.body;

      const line_items = cart.map((item) => {
        return {
          price_data: {
            currency: "IDR",
            product_data: {
              name: item.title,
              images: [item.photo],
              metadata: {
                id: item.id,
              },
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        };
      });
      const session = await stripe.checkout.sessions.create({
        line_items,
        mode: "payment",
        success_url: `${process.env.REACT_APP_URL}/checkout-success`,
        cancel_url: `${process.env.REACT_APP_URL}/cart`,
      });

      res.send({ url: session.url });
    } catch (err) {
      console.log(err);
      next(createError(500, "Checkout failed"));
    }
  },
};

module.exports = paymentController;
