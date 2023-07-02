import Image from "next/image";
import React from "react";
import { Button } from "../../../components/ui/button";
import { Trash2 } from "lucide-react";

export default function page() {
  return (
    <div className="container lg:max-w-7xl mt-12 mb-12">
      <h2 className="scroll-m-20 text-3xl font-bold tracking-tight transition-colors first:mt-0">
        Shopping Cart
      </h2>
      <div className="mt-10 grid lg:grid-cols-4 gap-4">
        <div className="col-span-3 p-1">
          <div className="grid lg:grid-cols-4 sm:grid-cols-4 p-1 mb-10">
            <div className="sm:col-span-1 p-1">
              <Image
                className="mx-auto rounded-lg"
                src={"/raglan sweatshirt.png"}
                width={250}
                height={250}
                alt="image"
              />
            </div>
            <div className="lg:col-span-3 sm:col-span-3 p-1 flex justify-between">
              <div className="flex flex-col justify-between lg:px-6">
                <p className="text-2xl">Raglan Sweatshirt</p>
                <p className="font-semibold">Dress</p>
                <p className="font-bold">Delivery Estimation</p>
                <p>5 working days</p>
                <p className="text-xl font-semibold">$100</p>
              </div>
              <div className="flex flex-col justify-between items-center">
                <div>
                  <Button variant="ghost">
                    <Trash2 />
                  </Button>
                </div>
                <div className="flex gap-2 items-center">
                  <Button variant="ghost">
                    <p className="text-3xl">+</p>
                  </Button>
                  <p>1</p>
                  <Button variant="ghost">
                    <p className="text-3xl">-</p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-4 p-1 mb-10">
            <div className="sm:col-span-1 p-1">
              <Image
                className="mx-auto rounded-lg"
                src={"/raglan sweatshirt.png"}
                width={250}
                height={250}
                alt="image"
              />
            </div>
            <div className="lg:col-span-3 sm:col-span-3 p-1 flex justify-between">
              <div className="flex flex-col justify-between lg:px-6">
                <p className="text-2xl">Raglan Sweatshirt</p>
                <p className="font-semibold">Dress</p>
                <p className="font-bold">Delivery Estimation</p>
                <p>5 working days</p>
                <p className="text-xl font-semibold">$100</p>
              </div>
              <div className="flex flex-col justify-between items-center">
                <div>
                  <Button variant="ghost">
                    <Trash2 />
                  </Button>
                </div>
                <div className="flex gap-2 items-center">
                  <Button variant="ghost">
                    <p className="text-3xl">+</p>
                  </Button>
                  <p>1</p>
                  <Button variant="ghost">
                    <p className="text-3xl">-</p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:col-span-3 lg:col-span-1 col-span-3 p-1">
          <div className="p-1 flex flex-col gap-6 justify-between w-full">
            <h2 className="font-bold text-xl">Order Summary</h2>
            <div className="flex justify-between">
              <p>Quantity</p>
              <p>1 product</p>
            </div>
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>$100</p>
            </div>
            <Button>Procede to Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
