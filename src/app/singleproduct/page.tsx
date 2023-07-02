import Image from "next/image";
import React from "react";
import { Button } from "../../../components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function page() {
  return (
    <div className="mt-12 mb-12 container lg:max-w-7xl">
      <div className="grid lg:grid-cols-3">
        <div className="lg:p-6 lg:col-span-2">
          <div className="flex lg:flex-row sm:flex-row flex-col-reverse gap-4 items-center justify-center">
            <div className="flex lg:flex-col sm:flex-col gap-2">
              <Image
                src={"/raglan sweatshirt.png"}
                width={98}
                height={98}
                alt="image"
              />
              <Image
                src={"/raglan sweatshirt.png"}
                width={98}
                height={98}
                alt="image"
              />
              <Image
                src={"/raglan sweatshirt.png"}
                width={98}
                height={98}
                alt="image"
              />
            </div>
            <Image
              src={"/raglan sweatshirt.png"}
              width={450}
              height={450}
              alt="image"
            />
          </div>
        </div>
        <div className="lg:py-6">
          <div className="sm:pl-6 lg:pl-0 mt-5 lg:mt-0">
            <div className="flex flex-col gap-6">
              <h3 className="text-3xl">Raglan Sweatshirt</h3>
              <h3 className="text-xl">Dress</h3>
              <div className="flex flex-col gap-1">
                <p className="font-semibold">Select Size:</p>
                <div className="flex gap-3">
                  <div className="bg-gray-500 rounded-full w-[45px] h-[45px] flex items-center justify-center">
                    <p>XS</p>
                  </div>
                  <div className="bg-gray-500 rounded-full w-[45px] h-[45px] flex items-center justify-center">
                    <p>S</p>
                  </div>
                  <div className="bg-gray-500 rounded-full w-[45px] h-[45px] flex items-center justify-center">
                    <p>M</p>
                  </div>
                  <div className="bg-gray-500 rounded-full w-[45px] h-[45px] flex items-center justify-center">
                    <p>L</p>
                  </div>
                  <div className="bg-gray-500 rounded-full w-[45px] h-[45px] flex items-center justify-center">
                    <p>XL</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <p className="font-semibold">Quantity:</p>
                <div className="flex items-center gap-2">
                  <Button>+</Button>
                  <p>1</p>
                  <Button>-</Button>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <Button className="flex gap-2 p-6 sm:px-12">
                  <ShoppingCart />
                  Add to Cart
                </Button>
                <p className="text-2xl font-bold">$100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:p-6 sm:p-6 p-1 mt-12">
        <p className="text-2xl font-bold">Product Information</p>
        <hr className="my-8" />
        <div className="p-1 flex flex-col gap-6">
          <div className="grid lg:grid-cols-4 sm:grid-cols-4 gap-6 lg:gap-0 sm:gap-0">
            <div className="lg:col-span-1 sm:col-span-1 col-span-3">
              <p className="font-bold">PRODUCT DETAILS</p>
            </div>
            <div className="col-span-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-4 gap-6 lg:gap-0 sm:gap-0">
            <div className="lg:col-span-1 sm:col-span-1 col-span-3">
              <p className="font-bold">PRODUCT CARE</p>
            </div>
            <div className="col-span-3">
              <div>
                <ul className="list-disc">
                  <li>Hand wash using cold water.</li>
                  <li>Do not using bleach.</li>
                  <li>Hang it to dry.</li>
                  <li>Iron on low temperature.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
