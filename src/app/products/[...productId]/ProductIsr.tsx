import { addToCart } from "@/redux/ProductsSlice";
import { RootState } from "@/redux/store";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
interface ProductData {
  id: number;
  price: number;
  title: string;
  image: string;
  category: string;
  rating: number;
}
const ProductIsr = ({
  productData,
}: {
  productData: {
    id: number;
    price: number;
    title: string;
    image: string;
    category: string;
    rating: number;
  };
}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cartSlice);
  console.log(cart);
  const router = useRouter();
  const sameItem = cart.filter((elem) => elem.id === productData.id);
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (sameItem.length !== 0) {
      setCount(sameItem[0].count);
    }
  }, []);

  return (
    <div className="mt-12 mx-auto card bg-base-100 w-96 shadow-xl mb-4">
      <figure>
        <Image
          src={productData.image}
          width={200}
          height={250}
          alt={productData.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productData.title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p>Price: {productData.price} $</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{productData.category}</div>
          <div className="badge badge-outline">{productData.rating}</div>
        </div>
        <div className="flex gap-x-2 items-center">
          <button
            className="w-[15px] h-[15px] rounded-full bg-green-600 text-white leading-[15px]"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>
          <span>{count}</span>
          <button
            className="w-[15px] h-[15px] rounded-full bg-red-600 text-white leading-[15px]"
            disabled={count === 1}
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
        </div>
        <p>
          {sameItem.map((elem) => {
            return <span key={elem.id}>Alredy Chosen: {elem.count} items</span>;
          })}
        </p>
      </div>
      <button
        onClick={() => {
          dispatch(
            addToCart({
              id: productData.id,
              price: productData.price,
              title: productData.title,
              count: count,
              image: productData.image,
            })
          );
          router.back();
        }}
        className=" btn btn-primary max-sm:w-full"
      >
        Buy
      </button>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  const products = res.data;

  const paths = products.map((product: { id: number }) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params!;

  try {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    const productData: ProductData = res.data;

    return {
      props: {
        productData,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return {
      props: {
        productData: null,
      },
    };
  }
};
export default ProductIsr;
