"use client";
import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { PinContainer } from "@/components/ui/3d-pin";
import servicesData from "@/constants/ServicesData";
import Image from "next/image";

const Services = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState([]);
  const [currentTitle, setCurrentTitle] = useState("");

  const handleReadMore = (fullDescription, title) => {
    setSelectedDescription(fullDescription);
    setCurrentTitle(title);
    setOpenDialog(true);
  };

  return (
    <div>
      <h2 className="text-2xl lg:text-4xl md:text-3xl text-center font-bold uppercase text-blue-400 drop-shadow-lg lg:mb-6 md:mb-2">
        Our Services
      </h2>
      <div className="w-full h-full flex flex-wrap items-center justify-center gap-12">
        {servicesData.map((item, index) => {
          const descriptionPoints = item.description.split("|");
          const showReadMore = descriptionPoints.length > 3;

          return (
            <div
              className="lg:min-h-[22.5rem] h-auto flex flex-col items-center justify-start sm:w-96 w-[80vw]"
              key={index}
            >
              <PinContainer title={item.title}>
                <div className="relative flex items-center justify-center lg:w-80 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden rounded-lg lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <Image width={100} height={100} src="/bg.png" alt="bgimg" />
                  </div>
                  <Image
                    width={200}
                    height={200}
                    src={item.image}
                    alt="cover"
                    className="z-10 absolute bottom-0 w-full h-full rounded-lg object-cover lg:rounded-3xl"
                  />
                </div>

                <h1 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1 ml-1 lg:ml-0">
                  {item.title}
                </h1>

                <ul
                  className="lg:text-sm lg:font-normal font-light text-sm"
                  style={{ color: "#BEC1DD", margin: "1vh 0" }}
                >
                  {descriptionPoints.slice(0, 3).map((point, idx) => (
                    <li key={idx} className="list-disc list-inside ml-1 lg:ml-0 text-black dark:text-[#BEC1DD]">
                      {point}
                    </li>
                  ))}
                </ul>
              </PinContainer>

              {showReadMore && (
                <div className="lg:mt-4 self-start lg:ml-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        className="text-sm text-black font-bold bg-teal-400 px-2 py-1 rounded-lg underline mt-4 ml-4 justify-start w-full"
                        onClick={() =>
                          handleReadMore(descriptionPoints, item.title)
                        }
                      >
                        Read More
                      </button>
                    </DialogTrigger>

                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="mt-2">
                          {currentTitle}
                        </DialogTitle>
                        <DialogDescription>
                          <ul className="list-disc list-inside mt-4">
                            {selectedDescription.map((point, idx) => (
                              <li key={idx} className="py-2">
                                {point}
                              </li>
                            ))}
                          </ul>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
