"use client";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { Icon } from "react-icons-kit";
import { shoppingCart } from "react-icons-kit/fa/shoppingCart";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const router = useRouter();
  const cart = useSelector((state: RootState) => state.cartSlice.length);

  return (
    <div
      onClick={() => {
        router.push("/cart");
      }}
      className="fixed left-4 top-4 max-md:top-16 z-50 cursor-pointer"
    >
      <span className="relative group">
        <Icon
          className="text-[#2D3748] transition-transform duration-200 ease-in-out group-hover:scale-110"
          icon={shoppingCart}
          size={50}
        />
        <span className="w-[22px] h-[22px] flex items-center justify-center absolute -top-2 -right-2 rounded-full bg-red-600 text-white text-xs font-semibold shadow-md">
          {cart}
        </span>
      </span>
    </div>
  );
};

export default CartIcon;
