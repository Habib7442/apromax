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
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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
            <Dialog>
              <DialogTrigger asChild>
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-2 py-1 text-sm text-white font-bold backdrop-blur-3xl">
                    Contact Us
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
