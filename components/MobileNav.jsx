"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import servicesData from "@/constants/ServicesData";
import { ContactIcon, Moon, Sun } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ContactUs from "./ContactUs";

const MobileNav = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <Sheet>
        {/* Flex container to align the hamburger icon and logo */}
        <div className="flex items-center justify-between px-4 py-2">
          {/* Hamburger menu icon aligned to the left */}
          <SheetTrigger>
            <HamburgerMenuIcon className="w-8 h-8 dark:text-white text-black-200 cursor-pointer" />
          </SheetTrigger>

          {/* Logo centered */}
          <div className="flex-grow flex justify-center">
            <Image
              src="/assets/images/AproMaxLogo.png"
              width={1000}
              height={1000}
              className="w-[100px] h-[100px] object-contain"
              alt="AproMax Logo"
            />
          </div>
          {/* Contact us */}
          <div className="flex items-center">
            <ContactUs />
          </div>
        </div>

        <SheetContent
          side="left"
          className="bg-slate-900 text-white scroll-y-auto"
        >
          <SheetHeader>
            {/* Navigation links */}
            <nav className="space-y-6 text-lg mt-4">
              <Link href="/" className="block hover:text-blue-400">
                Home
              </Link>
              <Link href="/services" className="block hover:text-blue-400">
                Services
              </Link>
              <Link href="/about" className="block hover:text-blue-400">
                About Us
              </Link>
              <Link href="/careers" className="block hover:text-blue-400">
                Careers
              </Link>
            </nav>
          </SheetHeader>

          {/* Services images list */}
          <div className="mt-8">
            <h3 className="text-lg font-bold mb-3">Our Services</h3>
            <div className="grid grid-cols-2 gap-4">
              {servicesData.map((service, idx) => (
                <div key={idx} className="text-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={50}
                    height={50}
                    className="mx-auto w-[50px] h-[50px] object-contain"
                  />
                  <p className="text-sm mt-2">{service.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Theme toggle button */}
          {mounted && (
            <div className="mt-10 flex justify-center">
              <Toggle
                aria-label="Toggle theme"
                pressed={theme === "dark"}
                onPressedChange={(pressed) =>
                  setTheme(pressed ? "dark" : "light")
                }
                className="bg-slate-800 hover:bg-slate-700"
              >
                {theme === "dark" ? (
                  <Moon className="h-4 w-4 text-white" />
                ) : (
                  <Sun className="h-4 w-4 text-white" />
                )}
                <span className="ml-2 text-white">
                  {theme === "dark" ? "Dark Mode" : "Light Mode"}
                </span>
              </Toggle>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
