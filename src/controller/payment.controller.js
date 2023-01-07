const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY);
const { v4: uuid } = require("uuid");
const createError = require("http-errors");
const paymentModel = require("../model/payment.model");
const cartModel = require("../model/cart.model");

const paymentController = {
  checkout: async (req, res, next) => {
    try {
      const { data } = req.body;

      const unpaid = data.filter((item) => item.status === 0)

      const items = unpaid?.map((item) => {
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
        line_items: items,
        mode: "payment",
        success_url: `${process.env.REACT_APP_URL}/thankyoupage`,
        cancel_url: `${process.env.REACT_APP_URL}/cart`,
      });

      res.send({ url: session.url });
    } catch (err) {
      console.log(err);
      next(createError.InternalServerError());
    }
  },

  createHitory: async (req, res, next) => {
    try {
      const id = uuid();
      const { uid, cid } = req.body;

      await paymentModel.createHistory(id, uid);

      await cartModel.update(cid, id);

      res.json({
        msg: "purchase history recorded",
      });
    } catch (err) {
      console.log(err);
      next(createError.InternalServerError());
    }
  },
};

module.exports = paymentController;
