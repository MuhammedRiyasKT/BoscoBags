import { selectTotalPrice } from "@/redux/features/cart-slice";
import { useAppSelector } from "@/redux/store";
import React from "react";

const OrderSummary = () => {
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const totalPrice = useAppSelector(selectTotalPrice);

  const handleWhatsAppOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Build product list
    const itemsText = cartItems
      .map(
        (item) =>
          `• ${item.title}\n  Qty: ${item.quantity} × ₹${item.discountedPrice} = ₹${
            item.discountedPrice * item.quantity
          }`
      )
      .join("\n\n");

    const message = `Hi, I'd like to place an order via WhatsApp:\n\n${itemsText}\n\n*Total: ₹${totalPrice}*\n\nFree Delivery | Expected in 4 days\n\nPlease confirm availability and payment details.\nThank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919745561967?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="lg:max-w-[455px] w-full">
      <div className="bg-white shadow-1 rounded-[10px]">
        {/* Header */}
        <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
          <h3 className="font-medium text-xl text-dark">Order Summary</h3>
        </div>

        <div className="pt-2.5 pb-8.5 px-4 sm:px-8.5">
          {/* Title */}
          <div className="flex items-center justify-between py-5 border-b border-gray-3">
            <h4 className="font-medium text-dark">Product</h4>
            <h4 className="font-medium text-dark text-right">Subtotal</h4>
          </div>

          {/* Cart Items */}
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 py-8">Your cart is empty</p>
          ) : (
            cartItems.map((item, key) => (
              <div
                key={key}
                className="flex items-center justify-between py-5 border-b border-gray-3"
              >
                <p className="text-dark max-w-[200px] truncate">
                  {item.title}
                  <span className="block text-sm text-gray-500">
                    Qty: {item.quantity}
                  </span>
                </p>
                <p className="text-dark text-right font-medium">
                  ₹{item.discountedPrice * item.quantity}
                </p>
              </div>
            ))
          )}

          {/* Total */}
          <div className="flex items-center justify-between pt-5">
            <p className="font-medium text-lg text-dark">Total</p>
            <p className="font-medium text-lg text-dark text-right">
              ₹{totalPrice}
            </p>
          </div>

          {/* WhatsApp Order Button */}
          <button
            onClick={handleWhatsAppOrder}
            className="w-full mt-7.5 flex items-center justify-center gap-2 font-medium text-white bg-[#25D366] py-3 px-6 rounded-md hover:bg-[#128C7E] transition"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.04 2C6.477 2 2 6.477 2 12.04c0 2.254.75 4.331 2.004 6.008L2.58 22l4.103-1.395c1.677 1.254 3.754 1.977 6.008 1.977C18.254 22.582 22 18.109 22 12.546 22 6.982 17.6 2 12.04 2zm5.87 13.636c-.225.674-.9 1.236-1.574 1.349-.674.112-1.574.112-2.698-.45-.225-.112-.45-.225-.674-.337-1.574-.9-2.698-2.473-3.148-3.597-.45-1.124-.45-2.023 0-2.698.112-.225.337-.45.562-.562.225-.112.45-.112.674 0 .225.112.45.225.562.337l.787 1.124c.112.225.112.45 0 .674-.112.225-.225.45-.337.562-.225.225-.337.45-.337.674 0 .225.112.45.225.674.45.9 1.124 1.574 1.911 1.911.225.112.45.225.674.225.225 0 .45-.112.674-.337.112-.112.337-.225.562-.337.225-.112.45-.112.674 0 .225.112.337.225.45.45l1.124.787c.112.112.225.337.225.562 0 .225 0 .45-.112.674z"
                fill="currentColor"
              />
            </svg>
            Order via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;