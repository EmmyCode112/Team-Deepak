// server.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Paystack from 'paystack-api';

const app = express();
const paystack = Paystack(process.env.PAYSTACK_SECRET_KEY);

app.use(cors());
app.use(bodyParser.json());

app.post('/paystack/pay', async (req, res) => {
  const { email, amount } = req.body;

  try {
    const response = await paystack.transaction.initialize({
      email: email,
      amount: amount * 100, // amount in kobo
    });
    res.send(response.data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));
