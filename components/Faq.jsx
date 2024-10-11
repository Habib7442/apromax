import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import { faq } from "@/constants/Faq";
  
  const Faq = () => {
    return (
      <div className="max-w-4xl mx-auto p-6 mt-4">
        <h2 className="text-2xl lg:text-4xl md:text-3xl text-center font-bold uppercase text-blue-400 drop-shadow-lg lg:mb-6 md:mb-2">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible>
          {faq.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-gray-300 py-4"
            >
              <AccordionTrigger className="text-xl font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base mt-2 dark:text-teal-200 text-black-100 font-bold">
                {item.ans}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  };
  
  export default Faq;
  