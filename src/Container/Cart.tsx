"use client";
import { removeFromCart } from "@/redux/ProductsSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const router = useRouter();
  const cartItems = useSelector((state: RootState) => state.cartSlice);
  const dispatch = useDispatch();
  console.log(cartItems, "cartItems");
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (cartItems.length === 0) {
      router.push("/products");
    }
    const calculatedTotal = cartItems.reduce(
      (acc, item) => acc + item.count * item.price,
      0
    );
    setTotal(calculatedTotal);
  }, [cartItems, router]);

  return (
    <>
      {cartItems.length !== 0 &&
        cartItems.map((elem) => {
          //   setTotal((prev) => prev + elem.count * elem.price);
          //   console.log(total);

          return (
            <div
              key={elem.id}
              className="card bg-base-100 w-[300px] mx-auto shadow-xl my-5 p-3 pt-4 relative"
            >
              <figure>
                <Image
                  className="mx-auto"
                  alt="product"
                  src={elem.image}
                  width={100}
                  height={150}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{elem.title}</h2>
                <p>price:{elem.price}</p>
                <div className="card-actions justify-end">
                  <p>count: {elem.count}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    removeFromCart({
                      count: elem.count,
                      id: elem.id,
                      image: elem.image,
                      price: elem.price,
                      title: elem.title,
                    })
                  );
                }}
                className="text-white bg-red-600 w-[20px] h-[20px] rounded-full text-[14px] active:scale-95 transition-all ease-linear duration-150 absolute top-2 right-2"
              >
                X
              </button>
            </div>
          );
        })}

      {cartItems.length !== 0 && (
        <p className="text-center mb-2">Total Ptice: {total} $</p>
      )}
      <button
        onClick={() => {
          router.push("/thank-you");
        }}
        className="w-[300px] h-[42px] bg-green-600 text-white text-lg block mx-auto my-2"
      >
        Pay
      </button>
    </>
  );
};

export default Cart;
