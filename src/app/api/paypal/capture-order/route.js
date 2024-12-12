// app/api/paypal/capture-order/route.js
import axios from 'axios';

export async function POST(req) {
  const { orderID } = await req.json();

  const CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
  const SECRET = process.env.PAYPAL_SECRET;
  const PAYPAL_API = 'https://api.paypal.com'; 

  const auth = Buffer.from(`${CLIENT_ID}:${SECRET}`).toString('base64');
  const headers = {
    Authorization: `Basic ${auth}`,
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders/${orderID}/capture`,
      {},
      { headers }
    );

    return new Response(
      JSON.stringify(response.data),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error capturing PayPal order:', error);
    return new Response('Error capturing order', { status: 500 });
  }
}