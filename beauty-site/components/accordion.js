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
        <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold">Is it time to start skin care?</AccordionTrigger>
        <AccordionContent className="text-sm leading-6 md:text-base md:leading-8 lg:text-lg lg:leading-10 text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni distinctio deserunt sapiente laborum doloribus magnam repudiandae dolore at rem ducimus?.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold">Does skin type affect the price?</AccordionTrigger>
        <AccordionContent className="text-sm leading-6 md:text-base md:leading-8 lg:text-lg lg:leading-10 text-gray-500">
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold">Should I take my personal decision to selecting creams?</AccordionTrigger>
        <AccordionContent className="text-sm leading-6 md:text-base md:leading-8 lg:text-lg lg:leading-10 text-gray-500">
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold">Do you offer doctor appointments?</AccordionTrigger>
        <AccordionContent className="text-sm leading-6 md:text-base md:leading-8 lg:text-lg lg:leading-10 text-gray-500">
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold">Do you manufacture the creams?</AccordionTrigger>
        <AccordionContent className="text-sm leading-6 md:text-base md:leading-8 lg:text-lg lg:leading-10 text-gray-500">
          Yes we do.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
