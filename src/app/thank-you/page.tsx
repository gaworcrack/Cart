"use client";
import { resetCart } from "@/redux/ProductsSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <div className="w-full h-[67vh] relative ">
      <h1 className="text-3xl flex flex-col items-center gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center mt-9">
        <span>Thanks for choosing us. See you later!</span> <br />
        <button
          className="flex items-center justify-center w-[250px] h-[48px] bg-green-500 text-white transition-all ease-linear duration-150 rounded-sm active:scale-95 "
          onClick={() => {
            router.push("/");
            dispatch(resetCart());
          }}
        >
          Back To Home
        </button>
      </h1>
    </div>
  );
};

export default Page;
