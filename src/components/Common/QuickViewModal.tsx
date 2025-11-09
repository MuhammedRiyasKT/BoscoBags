"use client";
import React, { useEffect, useState, useRef } from "react";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { addItemToCart } from "@/redux/features/cart-slice";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { usePreviewSlider } from "@/app/context/PreviewSliderContext";
import { updateproductDetails } from "@/redux/features/product-details";

const QuickViewModal = () => {
  const { isModalOpen, closeModal } = useModalContext();
  const { openPreviewModal } = usePreviewSlider();
  const [quantity, setQuantity] = useState(30);
  const dispatch = useDispatch<AppDispatch>();
  const quantityInputRef = useRef<HTMLInputElement>(null);

  const product = useAppSelector((state) => state.quickViewReducer.value);
  const [activePreview, setActivePreview] = useState(0);

  // Open full image preview
  const handlePreviewSlider = () => {
    dispatch(updateproductDetails(product));
    openPreviewModal();
  };

  // Add to cart
  const handleAddToCart = () => {
    dispatch(addItemToCart({ ...product, quantity }));
    closeModal();
  };

  // WhatsApp Order with +91 9745561967
  const handleWhatsAppOrder = () => {
    const message = `Hi, I'd like to order:\n\nProduct: ${product.title}\nQuantity: ${quantity}\nOriginal Price: $${product.price}\nDiscounted Price: $${product.discountedPrice}\nOffer: ${product.offer ? product.offer + " OFF" : "No Offer"}\n\nPlease confirm availability and delivery.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919745561967?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  // Handle quantity input
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const num = parseInt(value, 10);

    if (value === "") {
      setQuantity(30);
    } else if (!isNaN(num) && num >= 30) {
      setQuantity(num);
    }
  };

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 30 ? prev - 1 : 30));

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest(".modal-content")) {
        closeModal();
      }
    };
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      setQuantity(30);
    };
  }, [isModalOpen, closeModal]);

  return (
    <div
      className={`${
        isModalOpen ? "z-99999" : "hidden"
      } fixed top-0 left-0 overflow-y-auto no-scrollbar w-full h-screen sm:py-20 xl:py-25 2xl:py-[230px] bg-dark/70 sm:px-8 px-4 py-5`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-[1100px] rounded-xl shadow-3 bg-white p-7.5 relative modal-content">

          {/* ENHANCED CLOSE BUTTON – Always Visible */}
          {/* Enhanced Close Button */}
          <button
            onClick={closeModal}
            aria-label="Close modal"
            className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-red-500 text-black rounded-lg shadow-lg hover:bg-red-600 transition-all duration-200 font-medium text-sm group z-50"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 8.586L16.364 2.222 17.778 3.636 11.414 10 17.778 16.364 16.364 17.778 10 11.414 3.636 17.778 2.222 16.364 8.586 10 2.222 3.636 3.636 2.222 10 8.586z"
              />
            </svg>
          </button>

          <div className="flex flex-wrap items-center gap-12.5">
            {/* Image Gallery */}
            <div className="max-w-[526px] w-full">
              <div className="flex gap-5">
                {/* Thumbnails */}
                <div className="flex flex-col gap-5">
                  {product.imgs.thumbnails?.map((img, key) => (
                    <button
                      key={key}
                      onClick={() => setActivePreview(key)}
                      className={`flex items-center justify-center w-20 h-20 overflow-hidden rounded-lg bg-gray-1 ease-out duration-200 hover:border-2 hover:border-blue ${
                        activePreview === key && "border-2 border-blue"
                      }`}
                    >
                      <Image
                        src={img || ""}
                        alt="thumbnail"
                        width={61}
                        height={61}
                        className="aspect-square"
                      />
                    </button>
                  ))}
                </div>

                {/* Main Image */}
                <div className="relative z-1 overflow-hidden flex items-center justify-center w-full sm:min-h-[508px] bg-gray-1 rounded-lg border border-gray-3">
                  <button
                    onClick={handlePreviewSlider}
                    aria-label="zoom"
                    className="w-10 h-10 rounded-[5px] bg-white shadow-1 flex items-center justify-center ease-out duration-200 text-dark hover:text-blue absolute top-4 lg:top-8 right-4 lg:right-8 z-50"
                  >
                    <svg
                      className="fill-current"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.11493 1.14581L9.16665 1.14581C9.54634 1.14581 9.85415 1.45362 9.85415 1.83331C9.85415 2.21301 9.54634 2.52081 9.16665 2.52081C7.41873 2.52081 6.17695 2.52227 5.23492 2.64893C4.31268 2.77292 3.78133 3.00545 3.39339 3.39339C3.00545 3.78133 2.77292 4.31268 2.64893 5.23492C2.52227 6.17695 2.52081 7.41873 2.52081 9.16665C2.52081 9.54634 2.21301 9.85415 1.83331 9.85415C1.45362 9.85415 1.14581 9.54634 1.14581 9.16665L1.14581 9.11493C1.1458 7.43032 1.14579 6.09599 1.28619 5.05171C1.43068 3.97699 1.73512 3.10712 2.42112 2.42112C3.10712 1.73512 3.97699 1.43068 5.05171 1.28619C6.09599 1.14579 7.43032 1.1458 9.11493 1.14581ZM16.765 2.64893C15.823 2.52227 14.5812 2.52081 12.8333 2.52081C12.4536 2.52081 12.1458 2.21301 12.1458 1.83331C12.1458 1.45362 12.4536 1.14581 12.8333 1.14581L12.885 1.14581C14.5696 1.1458 15.904 1.14579 16.9483 1.28619C18.023 1.43068 18.8928 1.73512 19.5788 2.42112C20.2648 3.10712 20.5693 3.97699 20.7138 5.05171C20.8542 6.09599 20.8542 7.43032 20.8541 9.11494V9.16665C20.8541 9.54634 20.5463 9.85415 20.1666 9.85415C19.787 9.85415 19.4791 9.54634 19.4791 9.16665C19.4791 7.41873 19.4777 6.17695 19.351 5.23492C19.227 4.31268 18.9945 3.78133 18.6066 3.39339C18.2186 3.00545 17.6873 2.77292 16.765 2.64893ZM1.83331 12.1458C2.21301 12.1458 2.52081 12.4536 2.52081 12.8333C2.52081 14.5812 2.52227 15.823 2.64893 16.765C2.77292 17.6873 3.00545 18.2186 3.39339 18.6066C3.78133 18.9945 4.31268 19.227 5.23492 19.351C6.17695 19.4777 7.41873 19.4791 9.16665 19.4791C9.54634 19.4791 9.85415 19.787 9.85415 20.1666C9.85415 20.5463 9.54634 20.8541 9.16665 20.8541H9.11494C7.43032 20.8542 6.09599 20.8542 5.05171 20.7138C3.97699 20.5693 3.10712 20.2648 2.42112 19.5788C1.73512 18.8928 1.43068 18.023 1.28619 16.9483C1.14579 15.904 1.1458 14.5696 1.14581 12.885L1.14581 12.8333C1.14581 12.4536 1.45362 12.1458 1.83331 12.1458ZM20.1666 12.1458C20.5463 12.1458 20.8541 12.4536 20.8541 12.8333V12.885C20.8542 14.5696 20.8542 15.904 20.7138 16.9483C20.5693 18.023 20.2648 18.8928 19.5788 19.5788C18.8928 20.2648 18.023 20.5693 16.9483 20.7138C15.904 20.8542 14.5696 20.8542 12.885 20.8541H12.8333C12.4536 20.8541 12.1458 20.5463 12.1458 20.1666C12.1458 19.787 12.4536 19.4791 12.8333 19.4791C14.5812 19.4791 15.823 19.4777 16.765 19.351C17.6873 19.227 18.2186 18.9945 18.6066 18.6066C18.9945 18.2186 19.227 17.6873 19.351 16.765C19.4777 15.823 19.4791 14.5812 19.4791 12.8333C19.4791 12.4536 19.787 12.1458 20.1666 12.1458Z"
                        fill=""
                      />
                    </svg>
                  </button>
                  <Image
                    src={product?.imgs?.thumbnails?.[activePreview] || ""}
                    alt={product.title}
                    width={400}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="max-w-[445px] w-full">
              {/* Offer Badge */}
              {product.offer && (
                <span className="inline-block text-custom-xs font-medium text-white py-1 px-3 bg-green mb-6.5 rounded">
                  {product.offer} OFF
                </span>
              )}

              <h3 className="font-semibold text-xl xl:text-heading-5 text-dark mb-4">
                {product.title}
              </h3>

              {/* Category & Stock */}
              <div className="flex flex-wrap items-center gap-5 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-dark-3">Category:</span>
                  <span className="text-sm font-medium text-dark capitalize">
                    {product.category}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_375_9221)">
                      <path
                        d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                        fill="#22AD5C"
                      />
                      <path
                        d="M12.6875 7.09374L8.9688 10.7187L7.2813 9.06249C7.00005 8.78124 6.56255 8.81249 6.2813 9.06249C6.00005 9.34374 6.0313 9.78124 6.2813 10.0625L8.2813 12C8.4688 12.1875 8.7188 12.2812 8.9688 12.2812C9.2188 12.2812 9.4688 12.1875 9.6563 12L13.6875 8.12499C13.9688 7.84374 13.9688 7.40624 13.6875 7.12499C13.4063 6.84374 12.9688 6.84374 12.6875 7.09374Z"
                        fill="#22AD5C"
                      />
                    </g>
                  </svg>
                  <span className="font-medium text-dark">{product.stock}</span>
                </div>
              </div>

              <p className="mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has.
              </p>

              {/* Price & Quantity */}
              <div className="flex flex-wrap justify-between gap-5 mt-6 mb-7.5">
                <div>
                  <h4 className="font-semibold text-lg text-dark mb-3.5">Price</h4>
                  <span className="flex items-center gap-2">
                    <span className="font-semibold text-dark text-xl xl:text-heading-4">
                      ${product.discountedPrice}
                    </span>
                    <span className="font-medium text-dark-4 text-lg xl:text-2xl line-through">
                      ${product.price}
                    </span>
                  </span>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-dark mb-3.5">
                    Quantity (Min: 30)
                  </h4>
                  <div className="flex items-center">
                    <button
                      onClick={decrement}
                      className="flex items-center justify-center w-10 h-10 rounded-l-md bg-gray-2 text-dark ease-out duration-200 hover:text-blue disabled:opacity-50"
                      disabled={quantity <= 30}
                    >
                      <svg
                        className="fill-current"
                        width="16"
                        height="2"
                        viewBox="0 0 16 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M-8.548e-08 0.977778C-3.82707e-08 0.437766 0.437766 3.82707e-08 0.977778 8.548e-08L15.0222 1.31328e-06C15.5622 1.36049e-06 16 0.437767 16 0.977779C16 1.51779 15.5622 1.95556 15.0222 1.95556L0.977778 1.95556C0.437766 1.95556 -1.32689e-07 1.51779 -8.548e-08 0.977778Z"
                          fill=""
                        />
                      </svg>
                    </button>

                    {/* Editable Input */}
                    <input
                      ref={quantityInputRef}
                      type="text"
                      value={quantity}
                      onChange={handleQuantityChange}
                      onFocus={(e) => e.target.select()}
                      className="w-20 h-10 text-center border-t border-b border-gray-4 bg-white font-medium text-dark focus:outline-none focus:ring-2 focus:ring-blue focus:border-blue"
                      inputMode="numeric"
                    />

                    <button
                      onClick={increment}
                      className="flex items-center justify-center w-10 h-10 rounded-r-md bg-gray-2 text-dark ease-out duration-200 hover:text-blue"
                    >
                      <svg
                        className="fill-current"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.08889 0C8.6289 2.36047e-08 9.06667 0.437766 9.06667 0.977778L9.06667 15.0222C9.06667 15.5622 8.6289 16 8.08889 16C7.54888 16 7.11111 15.5622 7.11111 15.0222L7.11111 0.977778C7.11111 0.437766 7.54888 -2.36047e-08 8.08889 0Z"
                          fill=""
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 7.91111C4.72093e-08 7.3711 0.437766 6.93333 0.977778 6.93333L15.0222 6.93333C15.5622 6.93333 16 7.3711 16 7.91111C16 8.45112 15.5622 8.88889 15.0222 8.88889L0.977778 8.88889C0.437766 8.88889 -4.72093e-08 8.45112 0 7.91111Z"
                          fill=""
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={handleAddToCart}
                  className="inline-flex font-medium text-white bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark"
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleWhatsAppOrder}
                  className="inline-flex items-center gap-2 font-medium text-white bg-[#25D366] py-3 px-6 rounded-md ease-out duration-200 hover:bg-[#128C7E] transition-colors"
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
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;