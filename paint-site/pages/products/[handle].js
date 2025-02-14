import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IoArrowBackCircleOutline } from "react-icons/io5";


const staticProducts = [
  {
    id: 1,
    name: "MockupPaint",
    href: "#",
    price: "$48",
    imageSrc: "/images/paint/p-1.jpeg",
    imageAlt:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos odio porro facilis molestiae consectetur iusto dolorum illo, possimus expedita deserunt.",
  },
  {
    id: 2,
    name: "Cimento",
    href: "#",
    price: "$35",
    imageSrc: "/images/paint/p-2.jpeg",
    imageAlt:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos odio porro facilis molestiae consectetur iusto dolorum illo, possimus expedita deserunt.",
  },
  {
    id: 3,
    name: "Bravo",
    href: "#",
    price: "$89",
    imageSrc: "/images/paint/p-3.jpeg",
    imageAlt:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos odio porro facilis molestiae consectetur iusto dolorum illo, possimus expedita deserunt.",
  },
  {
    id: 4,
    name: "Antiruggine",
    href: "#",
    price: "$35",
    imageSrc: "/images/paint/p-4.jpeg",
    imageAlt:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos odio porro facilis molestiae consectetur iusto dolorum illo, possimus expedita deserunt.",
  },
  {
    id: 5,
    name: "Paint pail",
    href: "#",
    price: "$48",
    imageSrc: "/images/paint/p-5.jpeg",
    imageAlt:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos odio porro facilis molestiae consectetur iusto dolorum illo, possimus expedita deserunt.",
  },
  {
    id: 6,
    name: "Glossy Emul",
    href: "#",
    price: "$35",
    imageSrc: "/images/paint/p-15.jpeg",
    imageAlt:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos odio porro facilis molestiae consectetur iusto dolorum illo, possimus expedita deserunt.",
  },
  {
    id: 7,
    name: "Demi Dekk",
    href: "#",
    price: "$89",
    imageSrc: "/images/paint/p-7.jpeg",
    imageAlt:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos odio porro facilis molestiae consectetur iusto dolorum illo, possimus expedita deserunt.",
  },
  {
    id: 8,
    name: "Dulux Trade",
    href: "#",
    price: "$35",
    imageSrc: "/images/paint/p-13.jpeg",
    imageAlt:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos odio porro facilis molestiae consectetur iusto dolorum illo, possimus expedita deserunt.",
  },
  // More products...
];

const getRandomProducts = (products, currentId, count) => {
  // Filter out the current product
  const filteredProducts = products.filter(
    (product) => product.id !== currentId
  );
  // Shuffle the filtered products
  const shuffled = filteredProducts.sort(() => 0.5 - Math.random());
  // Return the first 'count' products
  return shuffled.slice(0, count);
};

function Handle() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { handle } = router.query; // Get the product ID from the URL
  // Find the product by ID
  const product = staticProducts.find((p) => p.id === parseInt(handle));
  // Check if the product is found
  if (!product) {
    return <div>Product not found</div>;
  }
  // Get 4 random related products
  const relatedProducts = getRandomProducts(staticProducts, product.id, 4);
  return (
    <div>
      <Navbar />
      <main className="mx-auto pt-14 sm:pt-24 max-sm:px-4 px-6 lg:max-w-7xl mb-4 lg:px-8">
        <Link href={"/shop"}>
          <IoArrowBackCircleOutline
            size={40}
            className="hover:opacity-50 mb-4"
          />
        </Link>
        <div
          key={product.handle}
          className="lg:grid lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16"
        >
          {/* Product image */}
          <div className="lg:col-span-4">
            <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
              <Image
                src={product.imageSrc}
                alt={product.imageAlt}
                className="object-center object-cover"
                width={500}
                height={250}
                layout="responsive"
              />
            </div>
          </div>
          <div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:col-span-3">
            <div className="flex flex-col">
              <div className="mt-4">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <br />
                <h2 id="information-heading" className="font-medium  italic">
                  Product information
                </h2>
                <br />
                <p className="text-gray-500 mt-4">{product.imageAlt}</p>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                <button
                  // onClick={checkout}
                  onClick={() => setIsLoading(!isLoading)}
                  className="w-full bg-orange-400 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-50 focus:ring-orange-500"
                >
                  {isLoading && (
                    <svg
                      class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  )}
                  Pay {product.price}
                </button>
                <button className="w-full bg-white border rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-orange-900 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-orange-500">
                  Preview
                </button>
              </div>
              {/* <hr /> */}
              <div className="border-t border-gray-200 mt-10 pt-10">
                <h3 className="text-sm font-medium text-gray-900">License</h3>
                <p className="mt-4 text-sm text-gray-500">
                  For personal and professional use. You cannot resell or
                  redistribute these icons in their original or modified state.
                  <a
                    href=""
                    className="font-medium text-gray-900 hover:text-gray-700"
                  >
                    Read full license
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ))} */}
        {/* Related products */}
        <p className="mt-24 mb-8 font-semibold text-lg">
          Customers also viewed
        </p>{" "}
        <div className="flex flex-wrap gap-x-6 lg:gap-x-8  gap-y-4 ">
          {relatedProducts.map((item) => {
            return (
              <>
                <Link
                  key={item.id}
                  href={`/products/${item.id}`}
                  className="group"
                >
                  <div className="w-[250px] max-sm:w-[150px]">
                    <Image
                      alt={item.imageSrc}
                      src={item.imageSrc}
                      className="aspect-[6/6] max-sm:aspect-[4/4] w-full border rounded-lg bg-gray-200 object-cover group-hover:opacity-75"
                      width={250}
                      height={100}
                    />
                  </div>
                  <h3 className="mt-4 font-medium text-sm text-gray-700">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-orange-500">
                    {item.price}
                  </p>
                </Link>
              </>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Handle;
