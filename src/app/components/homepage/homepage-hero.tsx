import Image from "next/image";
import HomepageNav from "./homepage-nav";
import Link from "next/link";

export default function HomepageHero() {
  return (
    <header className="py-4">
      <div className="mx-auto max-w-[1700px] flex items-center justify-between">
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
    </header>
  );
}
