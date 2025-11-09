"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import shopData from "../Shop/shopData";
import { addItemToCart } from "@/redux/features/cart-slice";
import { updateproductDetails } from "@/redux/features/product-details";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

const ShopDetails = () => {
  const { id } = useParams();
  const product = shopData.find((item) => item.id === Number(id));
  const dispatch = useDispatch<AppDispatch>();

  // ✅ Handle "product not found" early and safely
  const isProductAvailable = !!product;

  const [quantity, setQuantity] = useState(30);
  const [selectedColor, setSelectedColor] = useState(
    isProductAvailable ? product?.colors?.[0] || null : null
  );
  const [selectedImage, setSelectedImage] = useState(
    isProductAvailable
      ? selectedColor?.imgs?.thumbnails[0] || product?.imgs?.thumbnails[0]
      : ""
  );
  const [zoom, setZoom] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });

  // ✅ Move useEffect BEFORE any early return — always runs in same order
  useEffect(() => {
    if (selectedColor && selectedColor.imgs?.thumbnails) {
      setSelectedImage(selectedColor.imgs.thumbnails[0]);
    } else if (product?.imgs?.thumbnails) {
      setSelectedImage(product.imgs.thumbnails[0]);
    }
  }, [selectedColor, product]);

  if (!isProductAvailable) {
    return (
      <div className="text-center py-20 text-red-600 text-lg">
        Product not found!
      </div>
    );
  }

  const current = selectedColor || product;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  // Quantity handlers
  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 30 ? prev - 1 : 30));

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const num = parseInt(value, 10);
    if (value === "") {
      setQuantity(30);
    } else if (!isNaN(num) && num >= 30) {
      setQuantity(num);
    }
  };

  const handlePreviewSlider = () => {
    dispatch(updateproductDetails(product));
  };

  // Add to cart
  const handleAddToCart = () => {
    dispatch(addItemToCart({ ...product, quantity }));
  };

  // WhatsApp Order
  const handleWhatsAppOrder = () => {
    const message = `Hi, I'd like to order:\n\nProduct: ${current.title}\nQuantity: ${quantity}\nOriginal Price: ₹${current.price}\nDiscounted Price: ₹${current.discountedPrice}\nOffer: ${current.offer}\n\nPlease confirm availability and delivery.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919745561967?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main
      className="min-h-screen bg-[#f8f8f8] py-10 flex justify-center"
      style={{ marginTop: "90px" }}
    >
      <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 w-[95%] md:w-[90%] lg:w-[75%] flex flex-col md:flex-row gap-10">
        {/* ---------- LEFT IMAGE SECTION ---------- */}
        <div className="flex-1 flex flex-col items-center">
          {/* Main Image */}
          <div
            className="relative overflow-hidden rounded-xl w-[350px] h-[350px] md:w-[400px] md:h-[400px]"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
            onTouchStart={() => setZoom(true)}
            onTouchEnd={() => setZoom(false)}
          >
            <Image
              src={selectedImage}
              alt={current.title}
              fill
              className={`object-contain transition-transform duration-200 ${
                zoom ? "scale-150" : "scale-100"
              }`}
              style={{
                transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
              }}
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4 flex-wrap justify-center">
            {current.imgs?.thumbnails.map((thumb, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(thumb)}
                className={`rounded-md border-2 cursor-pointer overflow-hidden transition-transform ${
                  selectedImage === thumb
                    ? "border-green-600 scale-105"
                    : "border-gray-200 hover:border-green-400 hover:scale-105"
                }`}
              >
                <Image
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ---------- RIGHT DETAILS SECTION ---------- */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
            {current.title}
          </h2>

          <p className="text-gray-600 mb-1">
            <span className="font-medium">Brands:</span> BoscoBags
          </p>

          <p className="text-red-500 font-semibold mb-2">{current.offer} OFF</p>

          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl font-bold text-green-700">
              ₹{current.discountedPrice}
            </span>
            <span className="text-gray-400 line-through text-xl">
              ₹{current.price}
            </span>
          </div>

          <p className="text-sm text-green-600 mb-3">Free Delivery</p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Discover the perfect travel companion with our premium bags,
            expertly designed for your comfort and style. Crafted with durable,
            waterproof materials, ensuring both quality and long-lasting
            performance. Perfect for all your adventures.
          </p>

          {/* Warranty & Delivery Info */}
          <ul className="text-sm text-gray-700 mb-5 space-y-2">
            <li>2 Year Brand Warranty</li>
            <li>
              <span className="font-medium">Expected Delivery:</span> Within 4
              Days
            </li>
          </ul>

          {/* Quantity Input */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Quantity (Min: 30)
            </h3>
            <div className="flex items-center">
              <button
                onClick={decrement}
                className="flex items-center justify-center w-10 h-10 rounded-l-md bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 transition"
                disabled={quantity <= 30}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4"
                  />
                </svg>
              </button>

              <input
                type="text"
                value={quantity}
                onChange={handleQuantityChange}
                onFocus={(e) => e.target.select()}
                className="w-20 h-10 text-center border-t border-b border-gray-300 bg-white font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                inputMode="numeric"
              />

              <button
                onClick={increment}
                className="flex items-center justify-center w-10 h-10 rounded-r-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-5 mb-6">
            <button
              onClick={handleAddToCart}
              className="bg-green-600 text-black px-7 py-3 rounded-md hover:bg-green-700 transition"
            >
              Add to Cart
            </button>

            <button
              onClick={handleWhatsAppOrder}
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-md hover:bg-[#128C7E] transition"
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

          {/* COLORS */}
          {product.colors && (
            <>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                COLORS
              </h3>
              <div className="flex flex-wrap gap-5">
                {product.colors.map((color, index) => (
                  <div
                    key={`${color.id}-${index}`}
                    onClick={() => setSelectedColor(color)}
                    className={`border rounded-lg p-3 cursor-pointer w-[150px] text-center transition-all ${
                      selectedColor?.id === color.id
                        ? "border-green-600 shadow-lg"
                        : "border-gray-200 hover:shadow-md"
                    }`}
                  >
                    <Image
                      src={color.imgs?.thumbnails[0]}
                      alt={color.title}
                      width={120}
                      height={120}
                      className="rounded-md mx-auto mb-2"
                    />
                    <p className="text-sm font-medium text-gray-700">
                      {color.title}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Availability */}
          <p className="text-sm text-gray-500 mt-5">
            Availability:{" "}
            <span className="text-green-600 font-semibold">45</span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default ShopDetails;
