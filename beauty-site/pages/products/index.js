import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
const staticProducts = [
  {
    id: 1,
    name: "Joico Pearl",
    href: "#",
    price: "$48",
    imageSrc: "/products/Blonde Life (1).jpeg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Joico Gold",
    href: "#",
    price: "$35",
    imageSrc: "/products/Blonde Life.jpeg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Bar",
    href: "#",
    price: "$89",
    imageSrc: "/products/hairbar.jpeg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Milk & Honey Sugar Scrub",
    href: "#",
    price: "$35",
    imageSrc: "/products/Oriflame products.jpeg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
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
export default function Products({ products }) {
  return (
    <div>
      {/* <div className="  px-4 lg:px-8 pt-14 max-sm:pt-0"> */}
      <div className=" mx-auto max-w-2xl lg:max-w-7xl px-2 lg:px-8">
        {/* <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"> */}
        <div className=" px-2 py-8 sm:px-6 sm:py-8 lg:py-24  lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold font-Libre">All Products</h2>
          <br />
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {staticProducts.map((product) => {
              return (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <div className="group">
                    <Image
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="aspect-[4/4] w-full border rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
                      width={250}
                      height={100}
                      overlay="responsive"
                    />
                    <h3 className="mt-4 font-medium text-sm text-gray-700">
                      {product.name}
                    </h3>
                    <p className="mt-1 max-sm:mt-0 text-lg font-semibold text-orange-900">
                      {product.price}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
