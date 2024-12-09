"use client";
import Loading from "@/app/loading";
import { TProduct, fetchProducts } from "@/app/products/actions";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Products = () => {
  const router = useRouter();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["fetching products data"],
    queryFn: fetchProducts,
  });
  console.log(data, "hi");

  if (isError) {
    throw new Error("something went wrong");
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="w-full h-fit px-3">
      <h1
        className="text-center mt-6 mb-2
       h-[48px] text-2xl"
      >
        Products List
      </h1>

      <div
        className="w-[80%] mx-auto gap-4
       h-fit p-3 grid grid-cols-1 grid-rows-10 lg:grid-cols-3 lg:grid-rows-20 md:grid-cols-2 md:grid-rows-2 "
      >
        {data.map((elem: TProduct) => {
          return (
            <div
              key={elem.id}
              className="card bg-base-100 w-full  max-sm:max-w-[300px] sm:max-w-[350px] md:max-w-none  mx-auto shadow-xl p-3 pt-8"
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
                <p>proce:{elem.price}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => {
                      router.push(
                        `/products/${elem.title}?data=${encodeURIComponent(
                          JSON.stringify({
                            id: elem.id,
                            title: elem.title,
                            price: elem.price,
                            category: elem.category,
                            image: elem.image,
                            rating: elem.rating.rate,
                          })
                        )}`
                      );
                    }}
                    className="btn btn-primary max-sm:w-full"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
