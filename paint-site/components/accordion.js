import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold">
          Is it time to get my house painted?
        </AccordionTrigger>
        <AccordionContent className="text-base text-gray-500">
          Several factors indicate it's time for a fresh coat of paint. Look for
          signs of peeling, blistering, fading, cracking, or increased
          maintenance. Beyond the practical considerations, repainting is also
          an excellent way to enhance your home's curb appeal and reflect your
          personal style. Contact us for a professional assessment.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold">
          Do colors affect the price?
        </AccordionTrigger>
        <AccordionContent className="text-base text-gray-500">
          While the base paint itself is generally priced by type and volume,
          achieving certain highly pigmented or vibrant colors may require
          additional colorant. This could, in some cases, lead to a slight price
          difference. We are always transparent about pricing and will inform
          you of any potential variations during your color consultation. Our
          goal is to help you find the perfect color within your budget.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold">
          Do you manufacture paints?
        </AccordionTrigger>
        <AccordionContent className="text-base text-gray-500">
          {/* Yes we do. We manufacture paints for our customers. Emulsion, Texcote,
          Matt, Satin, Stucco, Gloss and Screeding Paints. */}
          Yes, we are proud to both manufacture and apply our own premium
          paints. This unique approach allows us to maintain complete control
          over the quality of our products, from the formulation of the paint to
          the final application. From <span className="font-bold"></span>
          Emulsion to <span className="font-bold"></span>Texcote paints,{" "}
          <span className="font-bold">Matt</span>,{" "}
          <span className="font-bold">Satin</span>,{" "}
          <span className="font-bold">Stucco</span>,{" "}
          <span className="font-bold">Gloss and even</span>,{" "}
          <span className="font-bold">Screeding Paints</span>. This vertical
          integration ensures the highest standards of excellence and allows us
          to offer our clients unparalleled quality and service..
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold">
          How do I purchase your paints?
        </AccordionTrigger>
        <AccordionContent className="text-base text-gray-500">
          {/* Visit our the store and purchase the paint you want. You can
          <Link href="/shop" className="italic underline">
            click here
          </Link>
          to visit our store. */}
          Browse our full range of premium paints in our
          online store. To learn more about our products,{" "}
          <Link href="/shop" className="italic underline">
            click here
          </Link>
          . You'll find detailed product information, color inspiration, and
          everything you need to get started on your painting project.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold">
          Do you paint exteriors?
        </AccordionTrigger>
        <AccordionContent className="text-base text-gray-500">
          Absolutely! We specialize in painting exteriors, transforming homes
          and businesses with beautiful, durable finishes. Our expert team is
          skilled in working with a variety of exterior surfaces, from siding
          and brick to stucco and wood. We use premium paints designed to
          withstand the elements and keep your property looking its best for
          years to come.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
