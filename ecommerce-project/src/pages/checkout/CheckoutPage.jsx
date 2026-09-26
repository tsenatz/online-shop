import "./CheckoutPage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { CheckoutHeader } from "./CheckoutHeader";
import cartFavicon from "../../assets/images/cart-favicon.png";
import { OrderSummary } from "./OrderSummary";
import { Paymentsummary } from "./PaymentSummary";
export function CheckoutPage({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentsummary, setPaymentSummary] = useState(null);
  useEffect(() => {
    const fetchCheckoutData = async () => {
      let response = await axios.get(
        "api/delivery-options?expand=estimatedDeliveryTime",
      );
      setDeliveryOptions(response.data);
      response = await axios.get("api/payment-summary");
      setPaymentSummary(response.data);
    };
    fetchCheckoutData();
  }, []);
  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/png" href={cartFavicon} />
      <CheckoutHeader />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />
          <Paymentsummary paymentsummary={paymentsummary} />
        </div>
      </div>
    </>
  );
}
