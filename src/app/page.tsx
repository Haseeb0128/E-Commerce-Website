import { ShoppingCart } from "lucide-react";
import { Button } from "../../components/ui/button";
import Image from "next/image";
import BASE_PATH_FOR_API from "../../components/Shared/BasePath";

async function fetchAllProductsData() {
  let response = await fetch(`${BASE_PATH_FOR_API}/api/products`);
  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }
  return response.json();
}

export default async function Home() {
  let { response } = await fetchAllProductsData();
  console.log("Response: ", response);

  return (
    <div>
      {/* Hero Section */}
      <div className="container lg:max-w-7xl mt-[20px]">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 grid-cols-1">
          <div className="flex flex-col items-center justify-center p-4">
            <div className="sm:my-12 my-12">
              <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl lg:w-96 sm:w-[600px]">
                An Industrial Take on Streetwear
              </h1>
              <p className="leading-7 [&:not(:first-child)]:mt-6 mb-6 md:w-72">
                Anyone can beat you but no one can beat your outfit as long as
                you wear Dine outfits.
              </p>
              <Button className="w-[200px] h-[50px]">
                <ShoppingCart className="mr-2" /> Start Shopping
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center p-4">
            <div className="bg-gray-200 rounded-full">
              <Image
                className="sm:hidden lg:flex hidden"
                src={"/header.png"}
                width={500}
                height={500}
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-12 mb-12">1</div>
      {/* Promotions */}
      <div className="container flex flex-col mt-20 mb-20 mx-auto lg:max-w-7xl">
        <div className="text-center mb-4">
          <p>Promotions</p>
          <h2 className="scroll-m-20 pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0">
            Our Promotions Events
          </h2>
        </div>
        {/* Grid */}
        <div>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4">
            <div className="flex flex-col gap-4">
              <div className="bg-[#D6D6D8] flex md:flex-row sm:flex-row flex-col items-center justify-between">
                <div className="flex flex-col lg:ml-8 md:ml-8 sm:ml-8 mt-8 md:mt-0">
                  <h2 className="text-3xl font-bold">Get upto 60%</h2>
                  <p>For the summer season</p>
                </div>
                <Image
                  className="lg:mr-8 md:mr-8 sm:mr-8"
                  src={"/event1.png"}
                  width={250}
                  height={250}
                  alt="image"
                />
              </div>
              <div className="bg-[#212121] text-white flex flex-col items-center justify-center p-8">
                <h2 className="text-4xl font-bold mb-4">Get 30% Off</h2>
                <p>USE PROMO CODE</p>
                <h2 className="text-2xl font-bold bg-[#474747] lg:px-[40px] lg:py-2 sm:px-[40px] sm:py-2 px-[20px] py-2 rounded-lg">
                  DINEWEEKENDSALE
                </h2>
              </div>
            </div>
            <div className="flex md:flex-row sm:flex-row flex-col gap-4">
              <div className="bg-[#EFE1C7] flex flex-col justify-between w-full">
                <div className="mt-4 ml-4">
                  <p>Flex Sweatshirt</p>
                  <p>$100</p>
                </div>
                <Image
                  className="mx-auto"
                  src={"/event2.png"}
                  width={260}
                  height={260}
                  alt="image"
                />
              </div>
              <div className="bg-[#D7D7D9] flex flex-col justify-between w-full">
                <div className="mt-4 ml-4">
                  <p>Flex Push Button Bomber</p>
                  <p>$100</p>
                </div>
                <Image
                  className="mx-auto"
                  src={"/event3.png"}
                  width={260}
                  height={260}
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Products */}
      <div className="container lg:max-w-7xl mb-20 mt-20">
        <div className="flex flex-col mb-12">
          <div className="text-center mb-10">
            <p className="mb-3">PRODUCTS</p>
            <h2 className="text-3xl font-bold">Check What We Have</h2>
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-2 gap-4">
            <div>
              <Image
                className="mx-auto"
                src={"/raglan sweatshirt.png"}
                width={400}
                height={400}
                alt="image"
              />
              <p className="text-[18px] font-semibold">
                Brushed Raglan Sweatshirt
              </p>
              <p className="font-semibold text-xl">$100</p>
            </div>
            <div>
              <Image
                className="mx-auto"
                src={"/image1.png"}
                width={700}
                height={700}
                alt="image"
              />
              <p className="text-[18px] font-semibold">
                Cameryn Sash Tie Dress
              </p>
              <p className="font-semibold text-xl">$100</p>
            </div>
            <div>
              <Image
                className="mx-auto"
                src={"/image4.png"}
                width={400}
                height={400}
                alt="image"
              />
              <p className="text-[18px] font-semibold">Flex Sweatshirt</p>
              <p className="font-semibold text-xl">$100</p>
            </div>
            <div>
              <Image
                className="mx-auto"
                src={"/image7.png"}
                width={400}
                height={400}
                alt="image"
              />
              <p className="text-[18px] font-semibold">Muscle Tank</p>
              <p className="font-semibold text-xl">$100</p>
            </div>
          </div>
        </div>
      </div>
      {/* Jewellery */}
      <div className="container lg:max-w-7xl mb-20 mt-20">
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight lg:w-[450px] sm:w-[650px] mb-3">
              Unique and Authentic Vintage Designer Jewellery
            </h1>
          </div>
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-0">
            <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xl font-bold lg:w-[200px]">
                    Using Good Quality Materials
                  </p>
                  <p className="lg:w-[200px]">
                    Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                  </p>
                </div>
                <div>
                  <p className="text-xl font-bold lg:w-[200px]">
                    Modern Fashion Design
                  </p>
                  <p className="lg:w-[200px]">
                    Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xl font-bold lg:w-[200px]">
                    100% Handmade Products
                  </p>
                  <p className="lg:w-[200px]">
                    Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                  </p>
                </div>
                <div>
                  <p className="text-xl font-bold lg:w-[200px]">
                    Discount for Bulk Orders
                  </p>
                  <p className="lg:w-[200px]">
                    Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-3 lg:gap-0 sm:gap-0">
              <div>
                <Image
                  className="mx-auto"
                  src={"/image9.png"}
                  width={255}
                  height={255}
                  alt="image"
                />
              </div>
              <div>
                <div className="sm:mt-16 lg:mt-0">
                  <p className="mb-5">
                    This piece is ethically crafted in our small family-owned
                    workshop in Peru with unmatched attention to detail and
                    care. The Natural color is the actual natural color of the
                    fiber, undyed and 100% traceable.
                  </p>
                  <Button>See all products</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
