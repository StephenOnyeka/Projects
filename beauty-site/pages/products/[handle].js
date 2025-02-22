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
    name: "Joico Pearl",
    href: "#",
    price: "$48",
    imageSrc: "/products/Blonde Life (1).jpeg",
    imageAlt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugiat accusantium ipsa. Harum, praesentium eaque at ipsum eveniet mollitia.",
  },
  {
    id: 2,
    name: "Joico Gold",
    href: "#",
    price: "$35",
    imageSrc: "/products/Blonde Life.jpeg",
    imageAlt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugiat accusantium ipsa. Harum, praesentium eaque at ipsum eveniet mollitia.",
  },
  {
    id: 3,
    name: "Bar",
    href: "#",
    price: "$89",
    imageSrc: "/products/hairbar.jpeg",
    imageAlt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugiat accusantium ipsa. Harum, praesentium eaque at ipsum eveniet mollitia.",
  },
  {
    id: 4,
    name: "Milk & Honey Sugar Scrub",
    href: "#",
    price: "$35",
    imageSrc: "/products/Oriflame products.jpeg",
    imageAlt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugiat accusantium ipsa. Harum, praesentium eaque at ipsum eveniet mollitia.",
  },
  {
    id: 5,
    name: "Skin patch",
    href: "#",
    price: "$300.0",
    imageSrc: "/products/download (15).jpeg",
    imageAlt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugiat accusantium ipsa. Harum, praesentium eaque at ipsum eveniet mollitia.",
  },
  {
    id: 7,
    name: "Fino",
    href: "#",
    price: "$500.9",
    imageSrc: "/products/download (13).jpeg",
    imageAlt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugiat accusantium ipsa. Harum, praesentium eaque at ipsum eveniet mollitia.",
  },
  {
    id: 8,
    name: "Milk & Honey cream",
    href: "#",
    price: "$10.99",
    imageSrc: "/products/download (19).jpeg",
    imageAlt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugiat accusantium ipsa. Harum, praesentium eaque at ipsum eveniet mollitia.",
  },
  {
    id: 9,
    name: "Fenty skin",
    href: "#",
    price: "$64.0",
    imageSrc: "/products/Fenty Skin.jpeg",
    imageAlt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugiat accusantium ipsa. Harum, praesentium eaque at ipsum eveniet mollitia.",
  },
  {
    id: 10,
    name: "Hora",
    href: "#",
    price: "$102.0",
    imageSrc: "/products/download (20).jpeg",
    imageAlt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugiat accusantium ipsa. Harum, praesentium eaque at ipsum eveniet mollitia.",
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
  // Get 5 random related products
  const relatedProducts = getRandomProducts(staticProducts, product.id, 5);
  return (
    // <div className="mt-20">
    <div className="mx-auto lg:max-w-7xl">
      <main className=" pt-4 sm:pt-12 md:pt-20 max-sm:px-4 px-6 mb-4 lg:px-8">
        <Link href={"/products"}>
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
            {/* <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden"> */}
            <div className="aspect-square rounded-lg bg-gray-100 overflow-hidden">
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
                <h1 className="text-3xl font-bold font-Libre">
                  {product.name}
                </h1>
                <br />
                <h2
                  id="information-heading"
                  className="font-medium font-Libre italic"
                >
                  Product information
                </h2>
                <br />
                <p className="text-gray-500 mt-4 leading-8 max-sm:leading-8">
                  {product.imageAlt}
                </p>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                <button
                  // onClick={checkout}
                  onClick={() => setIsLoading(!isLoading)}
                  className="w-full bg-orange-950 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-50 focus:ring-orange-900"
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
                <button className="w-full bg-white border rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-black/90 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-orange-900">
                  Preview
                </button>
              </div>
              {/* <hr /> */}
              <div className="border-t border-gray-200 mt-10 pt-10">
                <h3 className="text-sm font-medium text-gray-900">License</h3>
                <p className="mt-4 text-sm leading-6 text-gray-500">
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
        <p className="mt-24 mb-8 font-semibold text-lg font-Libre">
          Customers also viewed
        </p>{" "}
        <div className="flex flex-wrap max-sm:flex-nowrap gap-x-4 md:gap-x-4 lg:gap-x-8 max-sm:gap-y-4  gap-y-4 overflow-x-scroll scroll-smooth pb-4 hide-scrollbar">
          {relatedProducts.map((item) => {
            return (
              <>
                <Link
                  key={item.id}
                  href={`/products/${item.id}`}
                  className="group"
                >
                  <div className="w-[250px] max-sm:w-[120px]">
                    <Image
                      alt={item.imageSrc}
                      src={item.imageSrc}
                      className="aspect-[6/6] max-sm:aspect-[4/4] w-full border rounded-lg bg-gray-200 object-cover group-hover:opacity-75"
                      width={250}
                      height={100}
                    />
                  </div>
                  {/* <h3 className="mt-4 font-medium text-sm max-sm:text-xs w-[250px] max-sm:w-[100px] text-gray-700">
                    {item.name}
                  </h3> */}
                  <p className="mt-2 text-lg font-medium max-sm:text-sm text-orange-900">
                    {item.price}
                  </p>
                </Link>
              </>
            );
          })}
        </div>
        {/* <div className="flex flex-wrap gap-x-4 md:gap-x-4 lg:gap-x-8  gap-y-4 ">
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
                  <p className="mt-1 text-lg font-medium text-orange-900">
                    {item.price}
                  </p>
                </Link>
              </>
            );
          })}
        </div> */}
      </main>
    </div>
  );
}
export default Handle;
