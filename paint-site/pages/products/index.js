import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
const staticProducts = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "360 silver watch",
    href: "#",
    price: "$300.0",
    imageSrc: "/images/Products/71J6k7xyW9L._SX569_.jpg",
    imageAlt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugiat accusantium ipsa. Harum, praesentium eaque at ipsum eveniet mollitia."
  },
  {
    id: 7,
    name: "Shawl lapel suit",
    href: "#",
    price: "$500.9",
    imageSrc: "/images/Products/images (67).jpeg",
    imageAlt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugiat accusantium ipsa. Harum, praesentium eaque at ipsum eveniet mollitia."
  },
  {
    id: 8,
    name: " Dark-brown shoe",
    href: "#",
    price: "$10.99",
    imageSrc: "/images/Products/images (74).jpeg",
    imageAlt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugiat accusantium ipsa. Harum, praesentium eaque at ipsum eveniet mollitia."
  },
  {
    id: 9,
    name: "Ruby necklace",
    href: "#",
    price: "$64.0",
    imageSrc: "/images/Products/Sa11dd9bfa4e24bc280d8881c10e4751a2.jpg_640x640Q90.jpg_.webp",
    imageAlt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugiat accusantium ipsa. Harum, praesentium eaque at ipsum eveniet mollitia."
  },
  {
    id: 10,
    name: " Fendi t-shirt",
    href: "#",
    price: "$102.0",
    imageSrc: "/images/Products/Fendi-red.png",
    imageAlt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugiat accusantium ipsa. Harum, praesentium eaque at ipsum eveniet mollitia."
  },
  // More products...
];
export default function Products({ products }) {
  return (
    <>
      <div className="relative isolate px-4 lg:px-8">
        <span>
          <Navbar />
        </span>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
        {/* <div> */}
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {/* <div className="mx-auto mt-6 mb-0 font-semibold text-lg"> */}
          <h2 className="text-2xl font-semibold">All Products</h2>
          <br />
          {/* <h2 className="sr-only">Products</h2> */}

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {
  staticProducts.map((product) => {
    return (
      <Link key={product.id} href={`/products/${product.id}`}>
        <div className="group">
          <Image
            alt={product.imageAlt}
            src={product.imageSrc}
            className="aspect-square w-full border rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
            width={250}
            height={100}
            overlay="responsive"
          />
          <h3 className="mt-4 font-medium text-sm text-gray-700">
            {product.name}
          </h3>
          <p className="mt-1 max-sm:mt-0 text-lg font-semibold text-green-900">
            {product.price}
          </p>
        </div>
      </Link>
    );
  })
}
          </div>          
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

