"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import footerLogoImage from "../assets/footer-logo.jpeg";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import heroImage1 from "../assets/opengraph-home.jpeg";

const url = heroImage1 as unknown as string;
export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        width: 1200,
        height: 627,
        url,
      },
    ],
  },
  title: "Powering Dreams",
  description:
    " Potential is distributed equally, but opportunity is not. At Powering Dreams, we bridge the gap.",
};

export default function NavigationSection() {
  return (
    <>
      <header className=" w-[95dvw] mx-auto px-4 py-6 mt-2 mb-8 rounded-lg bg-cyan-50">
        {" "}
        <NavigationMenu className="min-w-[90dvw]">
          <NavigationMenuList className="w-full grid grid-cols-2 items-center">
            <NavigationMenuItem>
              <NavigationMenuLink
                render={<Link href="/" />}
                className={`${navigationMenuTriggerStyle()}, hover:bg-transparent active:bg-transparent`}
              >
                <Image
                  src={footerLogoImage}
                  alt="Hero Image"
                  height={200}
                  width={200}
                  className="object-cover rounded-lg w-20 mx-auto h-20 "
                />
              </NavigationMenuLink>
            </NavigationMenuItem>
            <div className="flex  justify-end  gap-2">
              <NavigationMenuItem>
                {/* <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/#mission">Our Mission</Link>
                </NavigationMenuLink> */}
                <NavigationMenuLink
                  render={<Link href="/#mission" />}
                  className={`${navigationMenuTriggerStyle()}, font-bold hover:bg-cyan-200 active:bg-cyan-400`}
                >
                  Our Mission
                </NavigationMenuLink>
                <NavigationMenuLink
                  render={<Link href="/#impact" />}
                  className={`${navigationMenuTriggerStyle()}, font-bold hover:bg-cyan-200 active:bg-cyan-400`}
                >
                  The Impact
                </NavigationMenuLink>
                <NavigationMenuLink
                  render={<Link href="#successStory" />}
                  className={`${navigationMenuTriggerStyle()}, font-bold hover:bg-cyan-200 active:bg-cyan-400`}
                >
                  Success Story
                </NavigationMenuLink>
                <NavigationMenuLink
                  render={<Link href="#waysToGive" />}
                  className={`${navigationMenuTriggerStyle()}, font-bold hover:bg-cyan-200 active:bg-cyan-400`}
                >
                  Ways To Give
                </NavigationMenuLink>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    </>
  );
}
