"use client";
import React, { useState, useEffect } from "react";
import { Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import servicesData from "@/constants/ServicesData";
import Link from "next/link";
import Image from "next/image";
import { ContactIcon } from "lucide-react";
import { Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "next-themes";

import ContactUs from "./ContactUs";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-7xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive} className="flex items-center">
        <Link href="/">
          <Image
            src="/assets/images/AproMaxLogo.png"
            width={100}
            height={100}
            className="w-[200px] h-full"
            alt="AproMax Logo"
          />
        </Link>

        <div className="flex-grow flex justify-center items-center gap-10">
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="text-sm grid grid-cols-3 gap-5 p-4 max-h-80 overflow-y-auto">
              {servicesData.map((service, idx) => (
                <Link href="/services" key={idx}>
                  <ProductItem
                    title={service.title}
                    description={service.description.split("|")} // Splitting the description by '|'
                    href=""
                  />
                </Link>
              ))}
            </div>
          </MenuItem>
          <Link
            href="/about"
            className="text-black dark:text-white-100 hover:text-gray-300"
          >
            About Us
          </Link>
          <Link
            href="/careers"
            className="text-black dark:text-white-100 hover:text-gray-300"
          >
            Careers
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <ContactUs />
          <div className="flex items-center space-x-4">
            {mounted && (
              <Toggle
                aria-label="Toggle theme"
                pressed={theme === "dark"}
                onPressedChange={(pressed) =>
                  setTheme(pressed ? "dark" : "light")
                }
              >
                {theme === "dark" ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </Toggle>
            )}
          </div>
        </div>
      </Menu>
    </div>
  );
}
