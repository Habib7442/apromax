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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
          <Dialog>
            <DialogTrigger asChild>
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-2 py-1 text-sm text-white font-bold backdrop-blur-3xl">
                  Contact Us <ContactIcon className="w-5 h-5 ml-2" />
                </span>
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-slate-900 text-white">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  Get in Touch
                </DialogTitle>
              </DialogHeader>
              <form className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name"
                    className="bg-slate-800 border-slate-700"
                  />
                  <Input
                    placeholder="Last Name"
                    className="bg-slate-800 border-slate-700"
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-slate-800 border-slate-700"
                />
                <Input
                  placeholder="Designation"
                  className="bg-slate-800 border-slate-700"
                />
                <Select>
                  <SelectTrigger className="bg-slate-800 border-slate-700">
                    <SelectValue placeholder="Select Region" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800">
                    <SelectItem value="na">North America</SelectItem>
                    <SelectItem value="eu">Europe</SelectItem>
                    <SelectItem value="asia">Asia</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="bg-slate-800 border-slate-700">
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800">
                    {servicesData.map((service, idx) => (
                      <SelectItem
                        key={idx}
                        value={service.title.toLowerCase().replace(" ", "-")}
                      >
                        {service.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="bg-slate-800 border-slate-700">
                    <SelectValue placeholder="Select Industry" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800">
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea
                  placeholder="Your message"
                  className="bg-slate-800 border-slate-700"
                />
                <Button
                  type="submit"
                  className="bg-blue-200 hover:bg-blue-400 font-bold"
                >
                  Send Message
                </Button>
              </form>
            </DialogContent>
          </Dialog>
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
