import Image from "next/image";
import HomepageNav from "./homepage-nav";
import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";

export default function HomepageHero() {
  return (
    <header className="relative bg-black">
      <div className="absolute z-[60] top-0 left-0 right-0 py-4 mx-auto w-[94vw] flex items-center justify-between">
        <Link href="/" className="block h-8 w-32 shrink-0">
          <Image
            src="https://consumer-component-library.roocdn.com/26.25.0/static/images/logo-teal.svg"
            alt="Deliveroo Logo"
            width="128"
            height="32"
          />
        </Link>

        <HomepageNav />
      </div>

      <section className="relative pt-36 py-16 z-50">
        <div className="aspect-square absolute top-0 left-0 h-full w-2/5 -z-[1]">
          <Image
            src="https://img2.storyblok.com/filters:format(webp)/f/62776/860x642/4e0f98735d/grocery-bag.jpg"
            alt="Grocery bag"
            className="w-full h-full object-cover object-left-center"
            fill
          />
        </div>
        <div className="container max-w-2xl px-10">
          <h1 className="text-center text-white font-bold text-40 leading-[1.2] mb-10">
            Restaurant food, takeaway and groceries.{" "}
            <span className="text-brand">Delivered.</span>
          </h1>

          <p className="text-center text-white mb-6">
            Enter a postcode to see what we deliver
          </p>

          <div className="relative bg-white rounded-full h-16">
            <div className="flex items-center justify-center h-full w-8 absolute left-2">
              <button>
                <FaPaperPlane className="text-brand ml-2 text-lg" />
              </button>
            </div>
            <input
              className="w-full rounded-full pl-14 h-full text-lg outline-none text-black"
              placeholder="e.g. EC4R 3TE"
            />
            <button className="absolute right-1 h-14 top-1 font-bold text-white bg-brand px-12 rounded-full">
              Search
            </button>
          </div>

          <p className="text-center text-white text-sm mt-4">
            <Link href="/" className="text-brand">
              Log in
            </Link>{" "}
            for your recent addresses.
          </p>
        </div>
      </section>
    </header>
  );
}
