import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// AOS is initialised once for the whole app in components/aos-provider.js.

const staticProducts = [
  {
    id: 1,
    name: "MockupPaint",
    href: "#",
    price: "$48",
    imageSrc: "/images/paint/p-1.jpeg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Cimento",
    href: "#",
    price: "$35",
    imageSrc: "/images/paint/p-2.jpeg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Bravo",
    href: "#",
    price: "$89",
    imageSrc: "/images/paint/p-3.jpeg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Antiruggine",
    href: "#",
    price: "$35",
    imageSrc: "/images/paint/p-4.jpeg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Paint pail",
    href: "#",
    price: "$48",
    imageSrc: "/images/paint/p-5.jpeg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 6,
    name: "Designer",
    href: "#",
    price: "$35",
    imageSrc: "/images/paint/p-15.jpeg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 7,
    name: "Demi Dekk",
    href: "#",
    price: "$89",
    imageSrc: "/images/paint/p-7.jpeg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 8,
    name: "Dulux Trade",
    href: "#",
    price: "$35",
    imageSrc: "/images/paint/p-13.jpeg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export default function Shop({ products }) {
  return (
    <div>
      <Navbar />
      {/* <h1>About Page</h1> */}
      <div className="py-16 enter-rise">
        <p className="text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
          Shop Now
        </p>
      </div>
      <section>
        <div>
          <div
            id="prod"
            className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
          >
            <h2 className="text-2xl font-semibold" data-aos="fade-up">
              Products
            </h2>
            <br />
            {/* One data-aos="zoom-in" on the grid meant the whole catalogue
                animated the moment the first row appeared, so everything below
                the fold was already revealed. Each card now reveals as it
                arrives, staggered across its row. */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {staticProducts.map((product, i) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <div
                    className="group"
                    data-aos="fade-up"
                    data-aos-delay={(i % 4) * 100 || undefined}
                  >
                    <Image
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="aspect-square w-full border rounded-lg bg-gray-200 object-cover transition-opacity duration-300 group-hover:opacity-75 xl:aspect-[7/8]"
                      width={500}
                      height={250}
                    />
                    <h3 className="mt-4 font-medium text-sm text-gray-700">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-lg font-semibold text-orange-500">
                      {product.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
